const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry : {
        "bundle" : "./src/index.js",
    },
    output : {
        filename: "[name].js",              // output filename
        path : resolve(__dirname, 'build'), // output path
    },

    module : {
        rules : [
            {
                test : /\.jsx?$/,
                exclude : /node_modules/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ['env', 'stage-0' ,'react']  // preset
                    },
                }
            }
        ],
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        hot : true,
        inline: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        open : true,
        contentBase : "public",
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },

    devtool : 'inline-source-map'
};