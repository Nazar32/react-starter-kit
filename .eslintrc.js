// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
	extends: 'airbnb-base',
	plugins: [
		'react',
	],
	env: {
		es6: true,
		browser: true,
		node: true,
		jquery: true,
		mocha: true,
	},
	globals: {
		__DEV__: false,
	},
	parser: 'babel-eslint',
	rules: {
		'comma-dangle': ['warn', 'always', ],
		indent: ['error', 'tab', { SwitchCase: 1, }, ],
		'no-tabs': 0,
		'import/extensions': ['error', 'never', { packages: 'always', }, ],
		'import/no-unresolved': 0,
		'import/no-extraneous-dependencies': 0,
		'no-unused-vars': 0,
		'import/prefer-default-export': 0,
		'class-methods-use-this': 0,
		'array-bracket-spacing': 0,
		'no-plusplus': 0,
		'max-len': ['error', 120, ],
		'function-paren-newline': 0,
		'prefer-destructuring': 0,
	},
};
