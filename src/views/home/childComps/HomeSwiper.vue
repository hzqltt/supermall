<template>
    <Swiper>
        <SwiperItem v-for="item in banners" :key="item.title">
            <a :href="item.link">
                <img :src="item.image" alt="" @load="swiperImgLoad">
            </a>
        </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';

export default {
    name: "HomeSwiper",
    props: {
        banners: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isLoad: false
        }
    },
    components: {
        Swiper,
        SwiperItem
    },
    methods: {
        // swiper图片加载完成事件
        swiperImgLoad() {
            if (!this.isLoad) {
                this.$emit("swiperImgLoad");
                this.isLoad = true;
            }
        }
    }
}
</script>

<style scoped></style>