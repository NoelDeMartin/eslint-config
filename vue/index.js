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
                'vue/multi-word-component-names': 'off',
                'vue/no-setup-props-destructure': 'off',
                'max-len': 'off',
            },
            globals: {
                $: 'readonly',
                $$: 'readonly',
                $computed: 'readonly',
                $customRef: 'readonly',
                $ref: 'readonly',
                $shallowRef: 'readonly',
                $toRef: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                defineProps: 'readonly',
                withDefaults: 'readonly',
            },
        },
    ],
};
