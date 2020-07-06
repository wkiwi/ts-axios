/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-07-06 15:10:09
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-07-06 15:22:41
 */
import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  isAxiosError: boolean
  config?: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config?: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

export function createError(
  message: string,
  config?: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
