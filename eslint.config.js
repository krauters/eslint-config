import eslint from '@eslint/js'
import pluginStylisticTs from '@stylistic/eslint-plugin-ts'
import parserTs from '@typescript-eslint/parser'
import filenames from 'eslint-plugin-filenames'
import pluginImport from 'eslint-plugin-import'
import jsdoc from 'eslint-plugin-jsdoc'
import perfectionist from 'eslint-plugin-perfectionist'
import prettier from 'eslint-plugin-prettier'
import tsEslint from 'typescript-eslint'

import { rules } from './rules.js'

export default tsEslint.config(
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
			parserOptions: {
				parser: parserTs,
				project: true,
			},
		},
		plugins: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'@stylistic/ts': pluginStylisticTs,
			filenames,
			import: pluginImport,
			jsdoc,
			prettier,
		},
		rules,
		settings: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'import/resolver': {
				typescript: {},
			},
		},
	},
)
