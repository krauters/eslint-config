/* eslint-disable @typescript-eslint/naming-convention */

const eslint = require('@eslint/js')
const pluginStylisticTs = require('@stylistic/eslint-plugin-ts')
const parserTs = require('@typescript-eslint/parser')
const filenames = require('eslint-plugin-filenames')
const pluginImport = require('eslint-plugin-import')
const jsdoc = require('eslint-plugin-jsdoc')
const perfectionist = require('eslint-plugin-perfectionist')
const prettier = require('eslint-plugin-prettier')
const { existsSync } = require('fs')
const { join } = require('path')
const tsEslint = require('typescript-eslint')

const { rules } = require('./rules.js')

// eslint-disable-next-line no-undef
const tsconfigPath = join(__dirname, 'tsconfig.eslint.json')
const project = existsSync(tsconfigPath) ? tsconfigPath : './tsconfig.json'

module.exports = tsEslint.config(
	eslint.configs.recommended,
	...tsEslint.configs.recommendedTypeChecked,
	...tsEslint.configs.stylisticTypeChecked,
	...tsEslint.configs.strictTypeChecked,
	perfectionist.configs['recommended-alphabetical'],
	{
		files: ['*.js', '*.jsx'],
		...tsEslint.configs.disableTypeChecked,
	},
	{
		languageOptions: {
			globals: {
				module: 'readonly',
				require: 'readonly',
			},
			parserOptions: {
				parser: parserTs,
				project,
				sourceType: 'script',
			},
		},
		plugins: {
			'@stylistic/ts': pluginStylisticTs,
			filenames,
			import: pluginImport,
			jsdoc,
			prettier,
		},
		rules,
		settings: {
			'import/resolver': {
				typescript: {},
			},
		},
	},
)
