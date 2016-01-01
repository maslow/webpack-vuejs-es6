module.exports = {
    entry: "./scripts/app.coffee",
    output: {
        path: __dirname + '/build',
        publicPath: 'build/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.coffee$/, exclude: /node_modules/, loader: "coffee"},
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=assets/[name].[ext]?[hash]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.coffee']
    }
};
