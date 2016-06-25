var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: { path : path.join(__dirname, 'dist'), filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                
                query: {
                    presets: ['es2015', 'react']
                }
            }    
        ]
    }
};
//https://webpack.github.io/docs/webpack-dev-server.html
//https://www.twilio.com/blog/2015/08/setting-up-react-for-es6-with-webpack-and-babel-2.html
//http://survivejs.com/webpack/advanced-techniques/configuring-react/

//TODO ADD https://github.com/jtangelder/sass-loader