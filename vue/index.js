module.exports = {
    extends: ['@noeldemartin/eslint-config-typescript'],
    overrides: [
        {
            files: ['*.vue'],
            extends: ['plugin:vue/vue3-recommended'],
            rules: {
                'vue/html-indent': ['error', 4],
                'vue/max-attributes-per-line': ['error', { singleline: 3 }],
                'vue/max-len': ['error', {
                    code: 120,
                    ignoreHTMLAttributeValues: true,
                }],
                'max-len': 'off',
            },
        },
    ],
};
