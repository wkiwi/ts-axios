/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 11:44:42
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-07-05 22:02:07
 */
import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
export default axios
