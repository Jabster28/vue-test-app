module.exports = {
  // `module.rules` is the same as `module.loaders` in 1.x

  // options...
  devServer : {disableHostCheck : true},

  //   chainWebpack: (config, isServer) => {
  //     config.module
  //       .rule("coffee")
  //       .test(/\.coffee/)
  //       .use("coffee-loader")
  //       .loader("coffee-loader")
  //       .end();
  //   },
  pwa : {
    name : "My App",
    themeColor : "#4DBA87",
    msTileColor : "#000000",
    appleMobileWebAppCapable : "yes",
    appleMobileWebAppStatusBarStyle : "black"
    // configure the workbox plugin
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    // swSrc is required in InjectManifest mode.
    // swSrc: 'dev/sw.js',
    // ...other Workbox options...
    // }
  }
};
