const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 给路径配置别名  导入css/js/图片文件等
  configureWebpack: {
    resolve: {
      // extensions:[] 这些vue已经默认配置了
      alias: {
        // src配置别名为@  vue已经默认配置了
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
  },
});
