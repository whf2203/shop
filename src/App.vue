<template>
  <div id="app">
    <section>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item, index) in swiper" :key="index">
            <img :src="item.img_url">
          </mt-swipe-item>
        </mt-swipe>
    </section>
    <section class="list">
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.thumb_url">
        <span>{{item.short_name}}</span>
      </li>
    </section>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
// import { Swipe, SwipeItem } from 'mint-ui';
export default {
  name: 'app',
  computed: {
    ...mapState({
      list: state=>state.index.list,
      swiper: state=>state.index.swiper
    })
  },
  methods: {
    ...mapActions({
      getIndex: 'index/getIndex',
      getSwiper: 'index/getSwiper'
    })
  },
  mounted(){
    this.getIndex();
    this.getSwiper();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style: none;
  width: 50%;
}
.list{
  display: flex;
  flex-wrap: wrap;
}
.list span{
  display: block;
}
img{
  width: 100%
}
.mint-swipe{
  width: 100%;
  height: 375px;
}
</style>
