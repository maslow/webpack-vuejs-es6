module.exports = {
    entry: "./scripts/main.js",
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.js$/, exclude: /node_modules/, loader: "babel"},
            {test: /\.vue$/, exclude: /node_modules/, loader: "vue"},
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=assets/[name].[ext]?[hash]'
            }
        ]
    },
    babel: {
        presets: ['es2015']
    }
};
