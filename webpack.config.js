const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry : ['./src/index.js'],
    output : {
        filename : 'client.bundle.js',      // output filename
        path : resolve(__dirname, 'build'), // output path
        publicPath : '/'
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

    devtool : 'inline-source-map'
};