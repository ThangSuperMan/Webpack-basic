const path = require('path')

module.exports = {
    entry: './yaya.js',
    output: {
        filename: 'banana.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
}
