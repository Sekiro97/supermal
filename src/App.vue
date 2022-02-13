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
  .app-router-view{
    z-index: 1;
  }
  .app-main-tabbar{
    z-index: 2;
  }
</style>
