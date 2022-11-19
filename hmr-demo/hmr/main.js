/*
 * @Description:
 * @Author: v833
 * @Date: 2022-08-13 23:09:45
 * @LastEditors: v833
 * @LastEditTime: 2022-08-14 11:26:37
 */
import './style.css'

// 将渲染改成函数

export function render() {
  document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
  </div>
`
}

render()

if (import.meta.hot) {
  import.meta.hot.accept((newMoudle) => {
    newMoudle.render()
  })
}
