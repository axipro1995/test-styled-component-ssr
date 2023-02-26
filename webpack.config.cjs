const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const createStyledComponentsTransformer = require("typescript-plugin-styled-components").default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
	entry: "./src/index.tsx",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env"],
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,

				// this part for normal run
				// use: ["ts-loader"],

				// this part for debugging
				loader: "ts-loader",
				options: {
					getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
	output: {
		path: path.resolve(__dirname, "public/"),
		publicPath: "/public/",
		filename: "index_bundle.js",
		//chunkFilename: "chunk-[name].[contenthash].js",
		chunkFilename: "chunk-[name].js",
	},
	devServer: {
		static: path.join(__dirname, "src/"),
		// inline: true,
		port: 3006,
		historyApiFallback: true,
		// https: true,
		allowedHosts: "all",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
	],
};
