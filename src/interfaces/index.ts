export interface ResponseGenerator {
  config?: any,
  data?: any,
  headers?: any,
  request?: any,
  status?: number,
  statusText?: string
}

export interface Action {
  type: string,
  payload?: any,
}

export interface Label {
  languageID: string,
  labelSourceID: string,
  labelKey: string,
  labelSource: {
    id: string,
    isActive: true,
    title: string,
    key: string,
    labels: Array<string>
  },
  language: any,
  title: string,
  id: string,
  isActive: boolean
}