/*
 * @Description:
 * @Author: v833
 * @Date: 2022-06-26 15:51:47
 * @LastEditors: v833
 * @LastEditTime: 2022-08-14 11:29:41
 */
import { defineComponent } from 'vue'
import logo from '@/assets/logo.png'

export default defineComponent({
  setup() {
    return () => {
      return (
        <div>
          <div class="root">a</div>
          <img src={logo} alt="" />
        </div>
      )
    }
  }
})
