<template>
    <div class="nav-bar">
        <!-- 封装三个插槽，在每个页面导航中将插槽内容替换为展示的内容即可 -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
/* 设置NavBar导航的公共样式 */
.nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

}

.left,
.right {
    width: 60px;
}

.center {
    flex: 1;
}</style>>

