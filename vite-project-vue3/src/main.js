/*
 * @Description:
 * @Author: v833
 * @Date: 2022-06-26 15:43:40
 * @LastEditors: v833
 * @LastEditTime: 2022-08-14 12:03:27
 */
import { createApp } from 'vue'
import '@/style/index.css'
import { throttle } from 'lodash-es'
const globMoudle = import.meta.glob('./*', false)
Object.entries(globMoudle).forEach(([key, value]) => {
  if (key.includes('App.jsx')) {
    value().then((m) => {
      createApp(m.default).mount('#app')
    })
  }
})

console.log(throttle)

// import Worker from './worker?worker'
// const worker = new Worker()
// worker.onmessage = (e) => {
//   console.log(e.data)
// }
