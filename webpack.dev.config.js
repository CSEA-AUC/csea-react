//require our dependencies
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var host = (process.env.HOST || 'localhost');
var port = (+process.env.PORT + 1) || 8080;

//the base directory (absolute path) for resolving the entry option
var projectRootPath = __dirname;

module.exports = {
    devtool: 'inline-source-map',

    context: projectRootPath,

    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch',
        './src/index'],

    output: {
        path: path.resolve('./build/'),
        filename: "bundle.js",
        publicPath: 'http://' + host + ':' + port + '/'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader/webpack', 'babel']
            },
            {
                test: /\.css$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
            },
            {
                test: /\.scss$/, loaders: [
                'style-loader',
                'css-loader?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]',
                'postcss-loader',
                'sass-loader?outputStyle=expanded&sourceMap']
            },
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
            {test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=10000'}
        ]
    },

    resolve: {
        //tells webpack where to look for modules
        modulesDirectories: ['node_modules'],
        //extensions that should be used to resolve modules
        extensions: ['', '.js', '.jsx']
    },

    plugins: [
        // Creates a new html files based on template.html and dynamically adds the css and js files bundled by webpack
        // this was to avoid needing to change the directory of bundle.js when switching from development to production
        // and vice-versa
        new HtmlWebpackPlugin({
            template: 'dev.html',
            inject: 'body'
        }),

        new webpack.DefinePlugin({
            __DEVTOOLS__: true  // Enable react-devtools chrome extension
        }),
    ]
};
