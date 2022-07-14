const webpack = require('webpack');
module.exports = function override(config, env) {
    config.resolve.fallback = {
     
        os: require.resolve('os-browserify/browser'),
        path:require.resolve("path-browserify"),
        fs: false,
       
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    );

    return config;
}