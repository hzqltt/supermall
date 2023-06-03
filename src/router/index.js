import Vue from "vue";
import VueRouter from "vue-router";

// 导入组件(懒加载)
const Home = () => import("../views/home/Home");
const Cart = () => import("../views/cart/Cart");
const Category = () => import("../views/category/Category");
const Profile = () => import("../views/profile/Profile");

// 1.安装插件
Vue.use(VueRouter);

// 2.1配置router的映射关系（抽离出来写 方便维护）
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

// 2.创建router
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 3.导出router
export default router;
