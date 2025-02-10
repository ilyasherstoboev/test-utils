export const PORT = 3000
export const MAIN_URL = `http://localhost:${PORT}`

export enum EOptions {
  BASE_URL = 'baseURL',
}

export const REQUEST_OPTIONS = {
  [EOptions.BASE_URL]: MAIN_URL,
}
