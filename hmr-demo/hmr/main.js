import './style.css'

// 将渲染改成函数
let index = import.meta.hot.data?.cache?.getIndex?.() || 0
let timer = null
export function render() {
  timer = setInterval(() => {
    document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!!${index++}</h1>
  </div>
`
  }, 1000)
}

render()

// side effect
// const timer = setInterval(() => {
//   console.log(index++)
// }, 1000)

// 打包时会tree shaking
if (import.meta.hot) {
  import.meta.hot.accept((newMoudle) => {
    console.log('newMoudle: ', newMoudle)
    newMoudle.render()
  })
  import.meta.hot.dispose(() => {
    console.log('dispose')
    if (timer) {
      clearInterval(timer)
    }
  })
  import.meta.hot.data.cache = {
    getIndex() {
      return index
    }
  }
}
