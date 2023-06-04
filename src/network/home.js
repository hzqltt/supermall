import { request } from "./request";

// 这里写首页的所有请求url  统一管理

// 获取banner数据和推荐数据
export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}

// 获取流行、新款、精选数据
export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    // url: "/api/x6/home/data",
    params: {
      type,
      page,
    },
  });
}
