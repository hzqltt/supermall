<template>
    <div class="back-top">
        <img src="~assets/img/common/backTop.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'BackTop',
    methods: {
        // backClick() {
        //     // 向父组件传递函数
        //     this.$emit('backClick')
        // }

    }

}
</script>

<style scoped>
.back-top {
    position: fixed;
    right: 10px;
    bottom: 60px;
}

.back-top img {
    width: 43px;
    height: 43px;
}
</style>