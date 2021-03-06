var path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		bundle_1: './bundle_1/entry',
		bundle_2: './bundle_2/entry'
	},
    output: {
        path: '[bundle_dir]',
        filename: 'bundle-[name].js'
    }
};