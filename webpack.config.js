var path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // плагин для загрузки кода Vue


module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/js/'),
        publicPath: '/public/'
    },  
    mode: 'development',
    devtool: "source-map",
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        // https: true,
        host: "localhost",
        open: true,
        port: 8080,
        hot: true,
        // setup(app) {
        //     app.post('*', (req, res) => {
        //         res.redirect(req.originalUrl);
        //     });
        // }
    },
    module: {                     // добавляем модуль vue-loader для загрузки компонентов
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, 
            {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
       ]
}