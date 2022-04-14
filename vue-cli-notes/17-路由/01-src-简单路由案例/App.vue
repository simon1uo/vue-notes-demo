<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!--原始HTML中使用a标签实现页面的跳转-->
          <!-- <a class="list-group-item" href="./about.html">About</a>
               <a class="list-group-item active" href="./home.html">Home</a>-->
          <!--Vue中借助router-link标签实现类似a标签的路由切换-->
          <router-link class="list-group-item" active-class="active" to="/about">about</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!--制定组件的呈现位置-->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Banner from "./components/Banner";
export default {
  name: "App",
  components: {Banner},
  mounted() {
  }
}
</script>

<style>
</style>
