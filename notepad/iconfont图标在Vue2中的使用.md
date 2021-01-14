# Iconfont 的用法

#### 1. 使用
> 打开iconfont 官网  把图标 加入购物车中  点击“下载代码”  
#### 2. 解压压缩包
> iconfont.svg  svg是一种矢量格式改进的字体图标适合在手机设备上使用 【支持的浏览器：Chrome4+,Safari3.1+,Opera10.0+,iOS Mobile Safari3.2+】

> iconfont.css

> iconfont.eot  这是微软创造的字体格式。这种格式只在IE6-IE8里使用

> iconfont.ttf 【支持的浏览器：IE9+,Firefox3.5+,Chrome4+,Safari3+,Opera10+,iOS Mobile Safari4.2+】

> iconfont.woff  WOFF是Web Open Font Format几个词的首字母简写。这种字体格式专门用于网上  【支持的浏览器：IE9+,Firefox3.5+,Chrome6+,Safari3.6+,Opera11.1+】

> iconfont.woff2

#### 3.在项目的asset目录下新建 "iconfont"文件夹  把上面文件复制进入

#### 4. 在main.js 中  导入 iconfont
```
import './assets/iconfont/iconfont.css'
```
#### 5.在vue页面中使用
```
<span class="iconfont">&#xe773;</span>
```
#### 6.修改图标大小和图标颜色
```
.iconSize {
  // 控制图标大小
  font-size:50px;
  // 控制图标颜色
  color: red;
}

<span class="iconfont iconSize">&#xe773;</span>

```

#### 7.注意事项
```
.iconfont {
// 控制图标大小
  font-size:50px;
  // 控制图标颜色
  color: red;
}
就会导致所有的iconfont图标的大小和颜色都改变了，禁止这样使用
```
