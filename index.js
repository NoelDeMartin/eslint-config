module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+$' }],
        '@typescript-eslint/semi': ['error', 'always'],
        '@typescript-eslint/space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
        'array-bracket-spacing': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'indent': ['error', 4, { SwitchCase: 1 }],
        'linebreak-style': ['error', 'unix'],
        'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
        'max-len': [ 'error', 120 ],
        'no-multi-spaces': ['error', { exceptions: { Property: false } }],
        'no-unused-vars': 'off',
        'object-curly-spacing': ['error', 'always'],
        'padded-blocks': ['error', { blocks: 'never', classes: 'always', switches: 'never' }],
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single'],
        'semi': 'off',
        'space-before-function-paren': 'off',
        'space-in-parens': 'error',
    },
    overrides: [
        {
            files: [
                '.eslintrc.js',
                'jest.config.js',
                'rollup.config.js',
                'vite.config.js',
            ],
            env: { node: true },
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
        {
            files: ['*.test.ts', '*.spec.ts'],
            rules: {
                'padded-blocks': ['error', { classes: 'always', switches: 'never' }],
            },
        },
    ],
};
