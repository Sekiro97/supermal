<template>
  <div id="app">
    <router-view class="app-router-view"/>
    <main-tab-bar class="app-main-tabbar"/>
  </div>
</template>

<script>

  import MainTabBar from "components/content/mainTabBar/MainTabBar" //底部导航栏

  export default {
    name: 'app',
    components:{
      MainTabBar
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css";
</style>
