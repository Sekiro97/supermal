<template>
  <div class="content">
    <ul>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
      <li>sddsds</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Category",
  data(){
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(document.querySelector(".content"),{
      probeType: 3, //设置为2时，惯性滚动不发生监听，设置为3时，实时监听
      pullUpLoad: true
    })

    this.scroll.on('scroll',(position) => {
      console.log(position);
    })

    this.scroll.on('pullingUp',() => {
      console.log('上拉加载更多');
    })
  }
}
</script>

<style scoped>
.content{
  height: 100px;
  background-color: red;
  overflow: hidden;
}
</style>
