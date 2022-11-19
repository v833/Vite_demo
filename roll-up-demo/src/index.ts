import { ref } from 'vue'

import { a } from './a'

console.log(a)

const b = ref(2)

console.log('add', a + b.value)
