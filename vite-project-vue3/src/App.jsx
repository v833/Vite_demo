/*
 * @Description:
 * @Author: v833
 * @Date: 2022-06-26 15:51:47
 * @LastEditors: v833
 * @LastEditTime: 2022-08-13 22:07:43
 */
import { defineComponent } from 'vue';
import logo from '@/assets/logo.png';
import test from './test?worker';
console.log('test: ', test);

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <div class="root">app</div>
          <img src={logo} alt="" />
        </div>
      );
    };
  },
});
