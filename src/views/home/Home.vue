<template>
    <div id="home">
        <!-- 首页导航 -->
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <!-- 轮播图 -->
        <home-swiper :banners="banners"></home-swiper>
        <recommend :recommends="recommends"></recommend>

    </div>
</template>

<script>
// 1.导入Navbar组件  
import NavBar from 'components/common/navbar/NavBar';
import HomeSwiper from './childComps/HomeSwiper.vue';
import Recommend from './childComps/Recommend.vue';
import { getHomeMultidata } from 'network/home'   //default才能省略大括号



export default {
    name: "Home",
    components: {
        // 2.注册NavBar组件
        NavBar,
        HomeSwiper,
        Recommend
    },
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    created() {
        // 获取banner数据和推荐数据
        this.getMultiData()

    },
    methods: {
        // 网络请求相关 
        // 获取banner数据和推荐数据

        getMultiData() {
            getHomeMultidata().then(res => {
                console.log(res);
                // this.result = res  //箭头函数的this指向上一层次的this
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })


        }

    }
}
</script>

<style scoped>
#home {
    height: 100vh;
    position: relative;
}

.home-nav {
    background-color: var(--color-tint);
    color: #fff
}
</style>

