const path = require('path');

module.exports = {
    entry: {
        Alloy: './_src/alloy.ts',
        Controllers: './_src/Controllers/Controllers.ts',
        Directives: './_src/Directives/Directives.ts',
        Services: './_src/Services/Services.ts'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, '_dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}