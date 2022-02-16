<template>
  <nav-bar class="navbar">
    <div slot="center">商业街</div>
  </nav-bar>
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
.navbar{
  color: white;
  background-color: var(--color-tint);
}
</style>
