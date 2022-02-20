<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" width="65" height="65" @load="imageLoaded">
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
  },
  methods: {
    imageLoaded(){
      this.$emit('imageLoaded')
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
  box-shadow: 0px 20px 0px rgba(200,200,200,.2);
  padding-bottom: 5px;
}
.recommends-item{
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.recommends-item div{
  margin-top: 5px;
  font-size: 13px;
}
</style>
