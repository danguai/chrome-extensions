const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: { noEmit: false },
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
        filename: 'scripts/content.js',
        path: path.resolve(__dirname, '..', 'extension'),
    }
};
