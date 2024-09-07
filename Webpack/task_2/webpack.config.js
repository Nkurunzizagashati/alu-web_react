const path = require('path');

module.exports = {
	entry: './js/dashboard_main.js', // Single entry point
	output: {
		filename: 'bundle.js', // Simple filename without contenthash
		path: path.resolve(__dirname, 'public'),
		clean: true, // Clean the public folder before each build
	},
	mode: 'production',
	module: {
		rules: [
			// CSS and style loaders
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			// Image loader using file-loader
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]', // Keep original file name and extension
							outputPath: 'assets/', // Output to assets folder in public
						},
					},
				],
			},
		],
	},
	performance: {
		maxAssetSize: 1000000, // Limit asset size warnings
	},
};
