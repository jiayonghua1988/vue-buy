### 自定义JS导入使用
> 在实际的开发中，有些公共的方法可以定义到统一的一个地方，进行统一管理方便使用 比如公共方法

### 用法 定义 utils.js
```
export const aa = 34

export function hello () {
  console.log('外部jshello  测试')
}

必须 export 把方法和变量暴露给外部 否则只能在该文件中使用
```

### 使用
```
import { hello, aa } from '../../assets/utils'

在 methods: {
  test() {
    hello()
    
  }
}
```

### 注意
> 从外部文件导入的方法或属性不能直接使用
