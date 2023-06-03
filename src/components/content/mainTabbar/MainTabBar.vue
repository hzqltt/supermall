<template>
    <tab-bar>
        <tab-bar-item path="/home">
            <!-- // 在wevpack.base.config.js里起别名之后，通过标签的导入写法路径如下 ~ 波浪号是重点 -->
            <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/category">
            <img slot="item-icon" src="~assets/img/tabbar/gatery.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/gatery-active.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
            <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/cart-active.png" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
            <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/profile-active.png" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
// 在wevpack.base.config.js里起别名之后，通过import的导入写法路径如下 把src换成@符号
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
}
</script>

<style scoped></style>
