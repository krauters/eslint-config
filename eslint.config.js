/* eslint-disable @typescript-eslint/naming-convention */

const eslint = require('@eslint/js')
const pluginStylisticTs = require('@stylistic/eslint-plugin-ts')
const parserTs = require('@typescript-eslint/parser')
const pluginImport = require('eslint-plugin-import')
const jsdoc = require('eslint-plugin-jsdoc')
const perfectionist = require('eslint-plugin-perfectionist')
const prettier = require('eslint-plugin-prettier')
const projectStructure = require('eslint-plugin-project-structure')
const tsEslint = require('typescript-eslint')
const eslintReact = require('@eslint-react/eslint-plugin')

const { rules } = require('./rules.js')
const { getTsConfigFile } = require('./utils.js')

const project = getTsConfigFile()

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
			parser: parserTs,
			parserOptions: {
				project,
				sourceType: 'unambiguous',
			},
		},
		plugins: {
			'@stylistic/ts': pluginStylisticTs,
			import: pluginImport,
			jsdoc,
			prettier,
			'project-structure': projectStructure,
		},
		rules,
		settings: {
			'import/resolver': {
				typescript: {},
			},
		},
	},
	{
		...eslintReact.configs.recommended,
		files: ['**/*.tsx'],
		languageOptions: {
			parser: parserTs,
			parserOptions: {
				project,
				sourceType: 'unambiguous',
			},
		},
		rules: {
			...rules,
			'@typescript-eslint/naming-convention': [
				'error',
				{ format: ['camelCase'], selector: 'default' },
				{ format: ['camelCase', 'PascalCase'], selector: 'import' },
				{ format: ['camelCase', 'PascalCase'], selector: 'variable' },
				{ format: ['PascalCase'], selector: 'typeLike' },
				{ format: ['PascalCase'], selector: 'enumMember' },
			],
			'@typescript-eslint/no-unsafe-return': 'off',
		},
	},
)
