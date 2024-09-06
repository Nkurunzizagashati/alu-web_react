const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public'),
		clean: true,
	},
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html', // Template for index.html
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/',
						},
					},
					{
						loader: 'image-webpack-loader', // Image optimization
						options: {
							mozjpeg: {
								progressive: true,
							},
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
						},
					},
				],
			},
		],
	},
};
