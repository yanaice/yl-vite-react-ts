import {atom} from 'recoil'

export const appState = atom<IAppState>({
  key: 'appState',
  default: {
    loading: false,
    errorMsg: '',
    successMsg: '',
  },
})