<template>
    <div id="home">
        <!-- 3.NavBar组件替换中间的插槽 -->
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>

    </div>
</template>

<script>
// 1.导入Navbar组件  
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper.vue';
import { getHomeMultidata } from 'network/home'   //default才能省略大括号



export default {
    name: "Home",
    components: {
        // 2.注册NavBar组件
        NavBar,
        HomeSwiper
    },
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    created() {
        // 组件创建好，发送网络请求 调用函数
        getHomeMultidata().then(res => {
            console.log(res);
            // this.result = res  //箭头函数的this指向上一层次的this
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })

    }
}
</script>

<style scoped>
.home-nav {
    background-color: var(--color-tint);
    color: #fff
}
</style>

