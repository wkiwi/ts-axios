/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 15:09:45
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-07-05 21:29:43
 */
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
