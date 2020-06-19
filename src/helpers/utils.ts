/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 15:09:45
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-04-28 15:14:56
 */
const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}
