import useAxios, { APIResponse } from './useAxios'

export type UserNamePrefix = 'นาย' | 'นาง' | 'นางสาว'
export type UserIdType = 'citizen_id' | 'passport'

export interface IUser {
  id?: string
  namePrefix: UserNamePrefix
  firstName: string
  lastName: string
  lineUserId: string
  idType: UserIdType
  nationalId: string
  phone: string
  nationality: 'thai' | string
}

interface ILogin {
  username: string
  password: string
}

const useUser = () => {
  const { execute } = useAxios()

  const login = async ({
    username,
    password,
  }: ILogin): Promise<APIResponse<IUser>> => {
    const result = await execute({
      func: () => ({
        method: 'POST',
        url: '/api/v1/users',
        data: {
          username,
          password,
        },
      }),
      skipLoading: false,
      skipError: ({ error }: APIResponse) => {
        if (error?.code && ['USER_ALREADY_EXISTS'].includes(error?.code))
          return true
        return false
      },
    })

    return result
  }

  return {
    login,
  }
}

export default useUser
