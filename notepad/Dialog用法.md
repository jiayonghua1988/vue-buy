### Dialog用法

```
import {Dialog} from 'vant'
Vue.use(Dialog)

      this.$dialog.confirm(
        {
          message: '确定要删除吗？'
        }).then(() => {
        console.log('确定------------')
      }).catch(() => {
        console.log('取消-------------')
      })
```
