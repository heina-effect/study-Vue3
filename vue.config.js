const { defineConfig } = require('@vue/cli-service')
const VueAutoRoutingPlugin = require("vue-auto-routing/lib/webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  plugins: [
    new VueAutoRoutingPlugin({
      pages: "src/pages",
      importPrefix: "@/pages/",
    }),
  ],
})