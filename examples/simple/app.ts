/*
 * @Author: wkiwi
 * @Email: w_kiwi@163.com
 * @Date: 2020-04-28 14:31:31
 * @LastEditors: wkiwi
 * @LastEditTime: 2020-04-28 17:02:40
 */
import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2,
    c:[3,4,5]
  }
})





