/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-13 17:59:59
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 22:17:54
 */
let i = 0
function timeCount() {
  i++
  postMessage(i)
  setTimeout(timeCount, 500)
}
timeCount()
