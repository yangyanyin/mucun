'use strict'
const path = require('path')
const glob = require('glob')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const now = Date.now()
const buildType = `build-${now}`
// 多页配置
const pages = {}
glob.sync('./src/pages/**/main.js').forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/main.js')[0]
    pages[chunk] = {
      entry: path,
      template: './src/pages/' + chunk+'/index.html',
      filename: chunk+'/index.html',
      chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
})
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '//aicrszg.com/' : '/',
	pages,
	outputDir: 'mucun-build/build/',
	// configureWebpack: {
 //    	plugins: [
	// 		new BundleAnalyzerPlugin({
	// 			analyzerMode: 'static',
	// 			 reportFilename: `../../report/type-${buildType}.html`
	// 		})
	// 	]
 //  	},
	devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /asset/, to: '/assetAllocation/index.html' },
				{ from: /bank/, to: '/bank/index.html' },
				{ from: /city/, to: '/moveCity/index.html' },
				{ from: /passport/, to: '/passport/index.html' },
				{ from: /about/, to: '/about/index.html' },
				{ from: /project/, to: '/moveProject/index.html' },
				{ from: /^\/[\s\S]*/, to: '/home/index.html' }
			]
		}
	}
}