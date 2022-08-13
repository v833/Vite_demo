/*
 * @Description:
 * @Author: v833
 * @Date: 2022-06-26 15:43:40
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 22:18:15
 */
import { createApp } from 'vue'
import App from './App.jsx'
import '@/style/index.css'
import { a } from './test.ts'
import { version } from '../package.json'
console.log('pkg: ', version)

// import Worker from './worker?worker'
// const worker = new Worker()
// worker.onmessage = (e) => {
//   console.log(e.data)
// }

console.log(a)
createApp(App).mount('#app')
