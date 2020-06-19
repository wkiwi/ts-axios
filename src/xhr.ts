/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 12:09:41
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-04-28 12:26:05
 */
import { AxiosRequestConfig } from './types'
/**
 *
 *
 * @export
 * @param {AxiosRequestConfig} config
 */
export default function xhr(config: AxiosRequestConfig): void {
  const { data = null, url, method = 'get' } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}
