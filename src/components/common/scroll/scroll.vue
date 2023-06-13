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
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    // created已创建/mounted已挂载   顺序：created > mounted
    mounted() {
        // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            click: true,
            probeType: this.probeType, //父组件传递过来的属性
            // probeType: 3   //实时监听 
            pullUpLoad: this.pullUpLoad
        })
        // 2.监听滚动的位置
        this.scroll.on('scroll', position => {
            // console.log(position);
            this.$emit('scroll', position)
        })
        // this.scroll.scrollTo(0, 0)//回到顶部

        // 3.监听上拉事件
        this.scroll.on('pullingUp', () => {
            console.log('上拉加载更多')
            this.$emit('pullingUp')
        })

    },
    methods: {
        scrollTo(x, y, time = 300) {
            console.log('组件scrollTo方法');
            this.scroll.scrollTo(x, y, time)
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style scoped></style>