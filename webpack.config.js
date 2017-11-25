const webpack = require('webpack')

module.exports = {
    entry: './src/app.tsx',
    output: {
        path: __dirname + '/public/build/',
        publicPath: 'build/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.png', '.jpeg', '.jpg', '.svg', '.css'],
        modules: ['node_modules', 'src']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-3', 'react', 'env']
                    }
                }, {
                    loader: 'ts-loader'
                }]
            }, {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                }]
            }, {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 2,
                        modules: true,
                        minimize: true,
                        localIdentName: '[name]--[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: function () {
                            return [
                                require('postcss-short'),
                                require('postcss-cssnext')
                            ];
                        }
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'img/[name].[ext]'
                    }
                }
            }, {
                test: /\.(eot|woff|woff2|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: 2,
            children: true
        })
    ]
}
