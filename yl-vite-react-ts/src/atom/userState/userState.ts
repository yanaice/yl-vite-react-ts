import {atom} from 'recoil'

export const userState = atom<IUser>({
  key: 'userState',
  default: null,
})