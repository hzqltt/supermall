import { request } from "./request";

// 这里写首页的所有请求url  统一管理

export function getHomeMultidata() {
  return request({
    url: "/home/multidata",
  });
}
