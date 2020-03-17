'use strict'
const path = require('path')
const glob = require('glob')
const fs = require('fs')
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '//sgpec.sg/' : '/',
	outputDir: 'mucun-build/build/',
}