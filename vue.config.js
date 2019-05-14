'use strict'
const path = require('path')
const glob = require('glob')

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
	publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
	pages,
	outputDir: 'mucun-build',
	devServer: {
		historyApiFallback: {
			rewrites: [
				{ from: /asset-allocation/, to: '/assetAllocation/index.html' },
				{ from: /bank/, to: '/bank/index.html' },
				{ from: /move-city/, to: '/moveCity/index.html' },
				{ from: /move-project/, to: '/moveProject/index.html' },
				{ from: /passport/, to: '/passport/index.html' },
				{ from: /about/, to: '/about/index.html' },
		        { from: /^\/[\s\S]*/, to: '/home/index.html' }
			]
		}
	}
}