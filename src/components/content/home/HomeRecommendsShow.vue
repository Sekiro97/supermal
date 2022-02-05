<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" width="80">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendsShow",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  width: 100%;
  overflow: scroll;
  margin: 15px 0px 20px 0px;
}
.recommends-item{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.recommends-item div{
  margin-top: 5px;
}
</style>
