<template>
  <div class="container">
    <Category :listData="films" title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典电影</a>
          <a href="#">热门电影</a>
          <a href="#">推荐电影</a>
        </div>
        <h4>欢迎观看</h4>
      </template>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a slot="footer" href="#">单机游戏</a>
        <a slot="footer" href="#">网络游戏</a>
      </div>
    </Category>
    <Category :listData="foods" title="猫咪">
      <img slot="center" src="http://placekitten.com/500/300" alt="">
      <a slot="footer" href="#">更多猫咪</a>
    </Category>
  </div>
</template>

<script>

import Category from "./components/Category";

export default {
  name: "App",
  components: {Category},
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  }, methods: {},
}
</script>

<style>
.container, .foot {
  display: flex;
  justify-content: space-around;
}

img, video {
  width: 100%;
}

h4{
  text-align: center;
}


</style>
