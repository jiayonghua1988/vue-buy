### IndexBar索引栏用法
> 这个控件我花了不少时间，各种出错，只能说明我太笨了，但是最后终于弄出来了

### 用法 main.js
```
import { IndexBar, IndexAnchor } from 'vant'
Vue.use(IndexBar);
Vue.use(IndexAnchor);

```
### 使用控件
```
<van-index-bar>
  <van-index-anchor index="A" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  <van-index-anchor index="B" />
  <van-cell title="文本" />
  <van-cell title="文本" />
  <van-cell title="文本" />

  ...
</van-index-bar>
```

### 疑惑
> 我在做 城市按字母索引 v-for  字母   再根据  遍历出的字母  进行检索  v-for 城市名称 不会

### 解决方法
```
1.把 数据整理成
[{
  "pinyin":"A",
  citys:[]
}]

<van-index-bar :index-list="azListArray" highlight-color="#585858" :sticky="sticky">
  <section v-for="(city,index) in citys" :key="index">
    <van-index-anchor  :index="city.pinyin" />
    <p v-for="(name,nameIndex) in city.citysArray" :key="nameIndex" class="city_item_wrap">{{name.city}}</p>
  </section>
</van-index-bar>


循环 section
```
