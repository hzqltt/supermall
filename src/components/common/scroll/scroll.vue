<template>
    <!-- 
        通过 ref/children 属性拿元素 比较精确
        ref如果是绑定早组件中的，那么通过this.$refs.refname获取到的是一个组件对象
        ref如果绑定在普通的元素中，那么通过this.$ref.refname获取到的是一个元素对象
    -->
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
    name: 'Scroll',
    data() {
        return {
            scroll: null
        }
    },
    // created已创建/mounted已挂载   顺序：created > mounted
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {

        })

    }

}
</script>

<style scoped></style>