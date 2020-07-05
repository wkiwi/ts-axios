/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-07-05 21:48:32
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-07-05 21:59:13
 */
import { isPlainObject } from './utils'
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (
      name !== normalizedName &&
      name.toLocaleUpperCase() === normalizedName.toLocaleUpperCase()
    ) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8;'
    }
  }
  return headers
}
