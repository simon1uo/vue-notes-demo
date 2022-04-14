<template>
  <div class="container">
    <Category :listData="films" title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"/>
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>
    <Category :listData="cats" title="猫咪">
      <img src="http://placekitten.com/500/300" alt="">
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
      cats: ['橘猫', '暹罗', '金渐层', '蓝猫'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
    }
  }, methods: {},
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}

img, video {
  width: 100%;
}
</style>
