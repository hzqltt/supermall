<template>
    <div id="home">
        <!-- 首页导航 -->
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <!-- 轮播图 -->
        <home-swiper :banners="banners"></home-swiper>
        <!-- 推荐 -->
        <recommend :recommends="recommends"></recommend>
        <!-- 本周推荐 -->
        <feature></feature>
        <!--流行、新款、精选TabControl  -->
        <tab-control class="tab-control" :titles="['流行', '新款', '精选']"></tab-control>

        <div style="height:700px"></div>

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'


import HomeSwiper from './childComps/HomeSwiper.vue';
import Recommend from './childComps/Recommend.vue';
import Feature from './childComps/Feature.vue';

import { getHomeMultidata } from 'network/home'   //default才能省略大括号




export default {
    name: "Home",
    components: {
        NavBar,
        TabControl,
        HomeSwiper,
        Recommend,
        Feature,
        TabControl

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
    padding-top: 44px;
}

.home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    /* z-index 属性设定了一个定位元素及其后代元素或 flex 项目的 z-order。
    当元素之间重叠的时候，z-index 较大的元素会覆盖较小的元素在上层进行显示。 */
}

.tab-control {
    /* 粘性定位元素 移动端适应  这里貌似不适应 */
    position: sticky;
    top: 44px;
}
</style>

