<template>
  <div class="home-navbar">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar"
export default {
  name: "HomeNavBar",
  components:{
    NavBar
  }
}
</script>

<style scoped>
.home-navbar{
  color: white;
  background-color: var(--color-tint);
}
</style>
