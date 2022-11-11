import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HZRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface HZRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HZRequestInterceptors<T>
  showLoading?: boolean
}

export { HZRequestInterceptors, HZRequestConfig }
