const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // mode: 'production',
  mode: 'development',
  // entry 代表要打包的起點位置
  entry: {
    // __dirname 代表當前目錄的絕對位置
    // resolve(__dirname, 'src/index.js') 會得到 /Users/litinghong/Desktop/Karen/learning/webpack/practice/boilerplate/src/index.js
    main: resolve(__dirname, 'src/index.js'),
  },
  // output 代表打包結果輸出的設定，filename 為輸出的檔名，path 為輸出位置(需為絕對路徑)
  output: {
    filename: 'static/js/[name].[contenthash:8].js',
    path: resolve(__dirname, 'build'),
  },
  // 为了更容易地追踪 error 和 warning，JavaScript 提供了 source maps 功能，可以将编译后的代码映射回原始源代码。
  devtool: 'inline-source-map',
  // devServer{} 可用來設定webpack-dev-server在開發狀態下的打包方式，webpack-dev-server預設是將打包結果放於記憶體，所以不會像執行webpack後打包產生實際的bundle.js
  devServer: {
    // publicPath 可以指定打包生成的靜態文件在記憶體中的位置，優先權高於contentBase
    publicPath: '/',
    // contentBase可以指定 index.html的目錄位置，當 webpack-dev-server 在開啟伺服器時會先從publicPath 路徑下去找index.html，
    // 如果找不到就轉而到contentBase目錄位置下去找index.html，如果兩個(publicPath, contentBase) 都沒指定，則預設是從'/'去找
    contentBase: resolve(__dirname, 'public'),
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings.
    // overlay設定 true 會將編譯失敗的log直接應在瀏覽器上
    overlay: true,
    // open設定 true代表 webpack-dev-server跑起來時會自動開啟瀏覽器
    // open: true,
    // openPage可指定要開起的瀏覽器的網址路徑
    // openPage: '/',
  },
  // module 可以做loader的配置，由於webpack只能看得懂js與json格式的檔案，其他static如img,css等都看不懂，解決方法是使用一些相對應的loader去轉譯
  module: {
    // rules 設定詳細的loader配置
    rules: [
      {
        // test 指定要匹配的檔案，通常以副檔名指定檔案類型
        test: /\.(css|scss|sass)$/,
        // ues 指定要用哪些loader處理匹配到的檔案，執行順序由又至左，
        // sass-loader 負責把scss 語法轉成css
        // css-loader 負責處理css檔案的載入
        // style-loader 將css注入到 HTML 的 <style> 標籤上(在head tag 中)
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // https://webpack.docschina.org/loaders/babel-loader/
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            // @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s).
            // https://babeljs.io/docs/en/babel-preset-env
            // https://babeljs.io/docs/en/babel-preset-react
            // @babel/preset-env 可以將最新的js語法轉譯成瀏覽器支援的語法，如[const] to [var] or ()=>{} to function() {}
            // @babel/preset-react 可以把JSX 語法轉成 createElement()，若未轉換則瀏覽器無法解讀JSX語法
            presets: ['@babel/preset-env', '@babel/preset-react'],
            // set the value of cacheDirectory to true, the loader will use the default cache directory in node_modules/.cache/babel-loader.
            // 當專案比較大時，babel會很花時間在轉譯，此設定讓webpack 緩存每次打包過的結果在node_modules/.cache/babel-loader，下次再次打包時若沒修改的內容就會直接使用此緩存，可以提升打包速度
            cacheDirectory: true,
          },
        },
      },
      {
        // url-loader 類似於 file-loader，可以讓webpck處理如圖片或字型等靜態資源的載入
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
  // plugins負責使用一些模組插件來為打包提供額外功能，如優化或壓縮
  plugins: [
    // https://github.com/johnagan/clean-webpack-plugin
    // CleanWebpackPlugin 會先把之前 /build 打包的舊檔案刪掉
    new CleanWebpackPlugin(),
    // https://github.com/jantimon/html-webpack-plugin#options
    // HtmlWebpackPlugin 協助打包完後自動生成 index.html，並且引入所有打包輸出的資源
    new HtmlWebpackPlugin({
      // template必須要設定一個模板html檔案的絕對位置，HtmlWebpackPlugin會使用這個模板作為打包後創建的html結構基礎
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
};
