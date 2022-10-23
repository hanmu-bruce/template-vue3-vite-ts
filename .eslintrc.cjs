module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'prettier/prettier': [
            0,
            {
                semi: true,
                parser: 'flow',
            },
        ],
        '@typescript-eslint/ban-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        'vue/multi-word-component-names': 0,
    },
};
