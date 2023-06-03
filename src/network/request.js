import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    //这里创建的instance本身就是一个promise
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
    // header:{}
  });
  // 2.axios的拦截器
  //   2.1请求拦截
  //   axios.interceptors(拦截全局axios)  下面行代码只拦截实例instance
  instance.interceptors.request.use(
    (config) => {
      console.log(config); //拿到调用者传递的config之后 需要将config返回出去
      //   请求拦截的作用
      //   a.比如config中的一些信息不符号服务器的要求
      //   b.比如每次发送网络请求是，都希望在界面中显示一个请求的图标
      //   c.某些网络请求（比如登录token），必须携带一些特殊的信息token
      return config; //这行代码必须存在
    },
    (err) => {
      console.log(err);
    }
  );
  //   2.2响应拦截
  instance.interceptors.response.use(
    (res) => {
      console.log(res); //拿到服务器响应的res处理之后 需要将res返回出去
      return res.data; //一般返回res对象的data属性
    },
    (err) => {
      console.log(err);
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
