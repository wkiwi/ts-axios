/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-07-05 21:25:36
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-07-05 21:29:56
 */
import { isPlainObject } from './utils'
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
