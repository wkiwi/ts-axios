/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 11:48:06
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-04-28 12:29:54
 */
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
