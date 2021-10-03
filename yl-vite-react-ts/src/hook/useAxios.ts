import {AxiosError} from "axios"
import {useSetRecoilState} from "recoil"
import {appState} from "../atom/appState/appState"
import axios from "../client/axios"
import {IAppState} from "../atom/appState/appState"

interface IExecute {
  func: any
  skipLoading: boolean
  enableFallbackError?: (error: IExecuteResponse) => boolean
}

export interface IExecuteResponse<T = any> {
  data: T | null
  error?: AxiosError
  errorStatus?: number
  errorCode?: any
  errorData?: any
}

const useAxios = () => {
  const setAppState = useSetRecoilState(appState)

  const execute = async ({
    func,
    enableFallbackError,
    skipLoading = false,
  }: IExecute) => {
    try {
      !skipLoading && setAppState((s: IAppState) => ({...s, loading: true}))

      const resp = await axios(func())

      !skipLoading && setAppState((s) => ({...s, loading: false}))
      return {
        data: resp.data,
      }
    } catch (error: any) {
      !skipLoading && setAppState((s) => ({...s, loading: false}))

      const err: IExecuteResponse = {
        data: null,
        error,
        errorStatus: error?.response?.status,
        errorCode: error?.response?.data?.error_code,
        errorData: error?.response?.data,
      }

      let fallbackError = true
      if (enableFallbackError) {
        fallbackError = enableFallbackError(err) // if need fallback error return true, else return false
      }

      fallbackError &&
        setAppState((s) => ({
          ...s,
          errorMsg: `${err.errorCode}: เกิดข้อผิดพลาด Somethings went wrong`,
        }))

      return err
    }
  }

  return {
    execute,
  }
}

export default useAxios
