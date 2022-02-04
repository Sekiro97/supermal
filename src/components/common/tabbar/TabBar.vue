<template>
  <div class="tabbar">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tabbar{
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: #f6f6f6;
  width: 100%;
  box-shadow: 0 -1px 1px rgba(100,100,100,.3);
}
</style>
