import { useSetRecoilState } from 'recoil'
import { appState } from '../atom/appState/appState'
import axios from '../client/axios'
import { IAppState } from '../atom/appState/appState'

interface IExecute {
  func: any
  skipLoading: boolean
  skipError?: (error: APIResponse) => boolean
}

export interface APIResponse<T = any> {
  data: T | null
  error?: {
    status: number
    code?: string // app error maybe not have
    raw: any
  }
}

const useAxios = () => {
  const setAppState = useSetRecoilState(appState)

  const execute = async ({
    func,
    skipError,
    skipLoading = false,
  }: IExecute) => {
    try {
      !skipLoading && setAppState((s: IAppState) => ({ ...s, loading: true }))

      const resp = await axios(func())

      !skipLoading && setAppState((s) => ({ ...s, loading: false }))
      return {
        data: resp.data,
      } as APIResponse
    } catch (error: any) {
      !skipLoading && setAppState((s) => ({ ...s, loading: false }))

      const err: APIResponse = {
        data: null,
        error: {
          status: error?.response?.status,
          code: error?.response?.data?.error_code,
          raw: error?.response?.data,
        },
      }

      let isSkipError = false
      if (skipError) {
        isSkipError = skipError(err) // if need fallback error return true, else return false
      }

      !isSkipError &&
        setAppState((s) => ({
          ...s,
          errorMsg: `${err?.error?.status}: เกิดข้อผิดพลาด Somethings went wrong`,
        }))

      return err
    }
  }

  return {
    execute,
  }
}

export default useAxios
