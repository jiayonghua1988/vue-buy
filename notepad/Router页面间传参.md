### Router 页面跳转 传参

#### 传参
```
    gotoNext (cityName) {
      this.$router.push({
        path: '/sub',
        query: {
          city: cityName
        }
      })
    }
```
#### 接收参数
```
this.$route.query.city
```

#### 注意事项
```
跳转时  this.$router.push

接收参数时  this.$route.query    是$route 而不是  $router 不要拼错了
```
