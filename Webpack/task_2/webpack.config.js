const path = require('path');

module.exports = {
	entry: './js/dashboard_main.js',
	output: {
		filename: 'bundle.[contenthash].js', // Add contenthash to ensure unique filenames
		path: path.resolve(__dirname, 'public'),
	},
	mode: 'production',
	module: {
		rules: [
			// Handle CSS
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			// Handle images
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				use: [
					{
						loader: 'image-webpack-loader',
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
							gifsicle: {
								interlaced: false,
							},
						},
					},
				],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all', // Splits vendor and app-specific code into separate chunks
		},
	},
	performance: {
		maxAssetSize: 1000000, // Set asset size limit to 1MB to prevent warnings
	},
};
