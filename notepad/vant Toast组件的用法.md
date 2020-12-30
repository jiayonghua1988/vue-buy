### Vant Toast 组件的使用方法
#### 1. main.js 中
```
//  导入 vant Toast
import { Toast } from 'vant'
import 'vant/lib/index.css'
Vue.use(Toast)
```
#### 2. 使用
this.$toast('AAAA')
this.$toast.success('成功文案')
this.$toast.fail('失败文案')

#### 3. 使用时遇到的问题
>  1.发现toast 出的文案 没有样式 位置也不对  (忘记导入样式)
> ```
> import 'vant/lib/index.css'
>```
> 2. 发现toast出的样式 字和图标是 灰色
> ```
>
>```