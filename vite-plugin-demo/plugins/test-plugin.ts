export default (enforce?: 'pre' | 'post') => {
  return {
    name: 'test',
    enforce,
    buildStart() {
      console.log('buildStart', enforce)
    },
    resolveId(id) {
      console.log('id: ', id)
    },
    load(id) {
      console.log('load: ', id)
    }
  }
}
