<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <!-- <div :class="{ active: isActive }"> -->
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>

    </div>
</template>

<script>
export default {
    name: "TabBarItem",
    // 父传子
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'deeppink'
        }
    },
    data() {
        return {
            // isActive: false, 
        };

    },
    computed: {
        isActive() {
            //  '/home' ->item1(/home) =true  等于-1表示不存在 
            // $route是当前活跃的路由  当前活跃的路由是否包含父组件传递过来的路由 等于为真 不等于为否
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle() {
            return this.isActive ? { color: this.activeColor } : {}
        }

    },
    methods: {
        itemClick() {
            // 路由跳转
            this.$router.replace(this.path)
        }
    }
};
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}

.active {
    color: deeppink;
}
</style>
