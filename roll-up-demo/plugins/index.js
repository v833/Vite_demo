export default function (options) {
  return {
    name: 'my-plugin',
    // 最早执行
    options(inputOptions) {
      // console.log('inputOptions: ', inputOptions)
    },
    buildStart(inputOptions) {
      // rollup.config.js -> inputOptions
    },
    resolveId(source, importer) {
      // source -> 引入文件 .a.js
      // importer -> 从哪个文件引入的 index.js
    },
    load(id) {
      // console.log('id: ', id)
    },
    // 不能放在output的plugins中，因为output的plugins是在buildEnd之后执行的
    renderChunk(code, chunk, outputOptions) {},
    transform(code, id) {
      console.log('code: ', code)
    },
    // 最晚执行
    buildEnd(error) {}
  }
}
