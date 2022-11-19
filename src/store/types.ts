import { ILoginState } from './login/types'

export interface IRootState {
  name: string
  age: number
}

export interface IRootWidthModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWidthModule
