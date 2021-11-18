import { atom } from 'recoil'

export interface IAppState {
  loading: boolean
  errorMsg: string
  successMsg: string
}

export const appState = atom<IAppState>({
  key: 'appState',
  default: {
    loading: false,
    errorMsg: '',
    successMsg: '',
  },
})
