import useAxios, {IExecuteResponse} from "./useAxios"

export type UserNamePrefix = "นาย" | "นาง" | "นางสาว"
export type UserIdType = "citizen_id" | "passport"

export interface IUser {
  id?: string
  namePrefix: UserNamePrefix
  firstName: string
  lastName: string
  lineUserId: string
  idType: UserIdType
  nationalId: string
  phone: string
  nationality: "thai" | string
}

interface ILogin {
  username: string
  password: string
}

const useUser = () => {
  const {execute} = useAxios()

  const login = async ({
    username,
    password,
  }: ILogin): Promise<IExecuteResponse<IUser>> => {
    const result = await execute({
      func: () => ({
        method: "POST",
        url: "/api/v1/users",
        data: {
          username,
          password,
        },
      }),
      skipLoading: false,
      enableFallbackError: ({errorCode}: IExecuteResponse) => {
        if (["USER_ALREADY_EXISTS"].includes(errorCode)) return false
        return true
      },
    })

    return result
  }

  return {
    login,
  }
}

export default useUser
