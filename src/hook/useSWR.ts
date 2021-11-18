import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import useSWR from 'swr'
import { appState } from '../atom/appState/appState'

interface IError {
  status: number
  code: string
  raw: any
}
interface IProps {
  opts: any
  skipError?: (error: IError) => boolean
  skipLoading?: boolean
}
export interface IResponse<T = any> {
  data: T
  error: IError | null
  loading: boolean
}

const useWrapSWR = ({
  opts,
  skipError = () => false,
  skipLoading = false,
}: IProps): IResponse => {
  const setGlobalState = useSetRecoilState(appState)
  const { data, error } = useSWR(opts)

  useEffect(() => {
    if (!data && !error) {
      !skipLoading && setGlobalState((s) => ({ ...s, loading: true }))
    } else {
      !skipLoading && setGlobalState((s) => ({ ...s, loading: false }))
    }
    if (error) {
      const err = {
        status: error?.response?.status_code,
        code: error?.response?.data?.error_code,
        raw: error?.response?.data,
      }
      !skipError(err) &&
        setGlobalState((s) => ({
          ...s,
          loading: false,
          errorMsg: error?.message,
        }))
    }
  }, [data, error])

  return {
    data,
    error: error
      ? {
          status: error?.response?.status_code,
          code: error?.response?.data?.error_code,
          raw: error?.response?.data,
        }
      : null,
    loading: !data && !error,
  }
}

export default useWrapSWR
