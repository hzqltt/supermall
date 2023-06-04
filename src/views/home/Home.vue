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
        <tab-control @tabClick="tabClick" class="tab-control" :titles="['流行', '新款', '精选']" />
        <goods-list :goods="showGoods"></goods-list>





        <div style="height:700px"></div>

    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList'



import HomeSwiper from './childComps/HomeSwiper.vue';
import Recommend from './childComps/Recommend.vue';
import Feature from './childComps/Feature.vue';

import { getHomeMultidata, getHomeGoods } from 'network/home'   //default才能省略大括号





export default {
    name: "Home",
    components: {
        NavBar,
        TabControl,
        GoodsList,
        HomeSwiper,
        Recommend,
        Feature,


    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {
                    page: 0,
                    list: [
                        {
                            "fcid": "10057922",
                            "sort": "pop",
                            "style": null,
                            "price": "$99.00",
                            "title": "【直播秒杀】珀莱雅早C晚A+红宝石面霜紧致抗皱补水女",
                            "show": {
                                "img": "https://gw.alicdn.com/imgextra/i3/2081810928/O1CN018JfufF1Ij4NEWQ1th_!!2081810928.jpg_110x10000Q75.jpg_.webp"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "pop",
                            "style": null,
                            "price": "$680.00",
                            "title": "正品哥弟新款2023夏季胖mm桑蚕丝开衫条纹短袖冰丝针织t恤上衣女",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i2/1902503173/O1CN01nT2wSr1ZJHXYMfAb5_!!1902503173.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "pop",
                            "style": null,
                            "price": "$79.00",
                            "title": "蓝色职业衬衫女夏2023新款修身显瘦上衣百搭雪纺短袖外穿薄款衬衣",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "pop",
                            "style": null,
                            "price": "$99.8.00",
                            "title": "AEJ新款2023条纹泡泡袖短袖t恤女假两件短款冰丝针织撞色polo衫夏",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "pop",
                            "style": null,
                            "price": "$59.9",
                            "title": "梨形身材休闲短裤女显瘦胖妹妹2023新款大码高腰宽松a字五分裤潮",
                            "show": {
                                "img": "https://gd1.alicdn.com/imgextra/i1/2472412785/O1CN013fqRtf1WRZoOMv9kX_!!2472412785.jpg"
                            }
                        },
                    ]
                },
                'new': {
                    page: 0,
                    list: [
                        {
                            "fcid": "10057922",
                            "sort": "new",
                            "style": null,
                            "price": "$79.00",
                            "title": "蓝色职业衬衫女夏2023新款修身显瘦上衣百搭雪纺短袖外穿薄款衬衣",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "new",
                            "style": null,
                            "price": "$59.9",
                            "title": "梨形身材休闲短裤女显瘦胖妹妹2023新款大码高腰宽松a字五分裤潮",
                            "show": {
                                "img": "https://gd1.alicdn.com/imgextra/i1/2472412785/O1CN013fqRtf1WRZoOMv9kX_!!2472412785.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "new",
                            "style": null,
                            "price": "$99.00",
                            "title": "【直播秒杀】珀莱雅早C晚A+红宝石面霜紧致抗皱补水女",
                            "show": {
                                "img": "https://gw.alicdn.com/imgextra/i3/2081810928/O1CN018JfufF1Ij4NEWQ1th_!!2081810928.jpg_110x10000Q75.jpg_.webp"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "new",
                            "style": null,
                            "price": "$680.00",
                            "title": "正品哥弟新款2023夏季胖mm桑蚕丝开衫条纹短袖冰丝针织t恤上衣女",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i2/1902503173/O1CN01nT2wSr1ZJHXYMfAb5_!!1902503173.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "new",
                            "style": null,
                            "price": "$99.8.00",
                            "title": "AEJ新款2023条纹泡泡袖短袖t恤女假两件短款冰丝针织撞色polo衫夏",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },

                    ]
                },
                'sell': {
                    page: 0,
                    list: [
                        {
                            "fcid": "10057922",
                            "sort": "sell",
                            "style": null,
                            "price": "$79.00",
                            "title": "蓝色职业衬衫女夏2023新款修身显瘦上衣百搭雪纺短袖外穿薄款衬衣",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "sell",
                            "style": null,
                            "price": "$99.8.00",
                            "title": "AEJ新款2023条纹泡泡袖短袖t恤女假两件短款冰丝针织撞色polo衫夏",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i3/1099199195/O1CN010CSLeb2HnMdQB4nJU_!!1099199195.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "sell",
                            "style": null,
                            "price": "$99.00",
                            "title": "【直播秒杀】珀莱雅早C晚A+红宝石面霜紧致抗皱补水女",
                            "show": {
                                "img": "https://gw.alicdn.com/imgextra/i3/2081810928/O1CN018JfufF1Ij4NEWQ1th_!!2081810928.jpg_110x10000Q75.jpg_.webp"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "sell",
                            "style": null,
                            "price": "$680.00",
                            "title": "正品哥弟新款2023夏季胖mm桑蚕丝开衫条纹短袖冰丝针织t恤上衣女",
                            "show": {
                                "img": "https://gd2.alicdn.com/imgextra/i2/1902503173/O1CN01nT2wSr1ZJHXYMfAb5_!!1902503173.jpg_400x400.jpg"
                            }
                        },
                        {
                            "fcid": "10057922",
                            "sort": "sell",
                            "style": null,
                            "price": "$59.9",
                            "title": "梨形身材休闲短裤女显瘦胖妹妹2023新款大码高腰宽松a字五分裤潮",
                            "show": {
                                "img": "https://gd1.alicdn.com/imgextra/i1/2472412785/O1CN013fqRtf1WRZoOMv9kX_!!2472412785.jpg"
                            }
                        },

                    ]
                },
            },
            currentType: 'pop',
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    created() {
        // 1.获取banner数据和推荐数据
        this.getMultiData()
        // 2.获取流行、新款、精选的商品数据
        // this.getGoods('pop', 1)
        // this.getGoods('new', 1)
        // this.getGoods('sell', 1)

    },
    methods: {
        /**
         * 网络请求相关 
         */
        // 1.获取banner数据和推荐数据
        getMultiData() {
            getHomeMultidata().then(res => {
                // this.result = res  //箭头函数的this指向上一层次的this
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        // 2.获取流行、新款、精选的商品数据
        getGoods(type) {
            const page = this.goods[type].page + 1//page初始值的1
            getHomeGoods(type, page).then(res => {
                console.log(res);
                // 使用数组解构的方式，把每次请求的数据追加到数组中
                // 根据type拿到对应的数组，并往数组里添加新的数据，不覆盖原来的数据
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1

            })
        },
        /**
         * 事件监听相关
         */
        tabClick(index) {
            console.log(index);
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
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
    z-index: 9;
}
</style>

