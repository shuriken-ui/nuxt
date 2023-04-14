module.exports = {
  root: true,
  extends: [
    'plugin:unicorn/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:prettier-vue/recommended',
  ],
  plugins: ['unicorn', 'tailwindcss', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  settings: {
    tailwindcss: {
      config: 'tailwind/default.config.ts',
    },
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        // 'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['*.ts'],
      rules: {
        'unicorn/filename-case': 'error',
      },
    },
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-unused-vars': 'off',
    'no-undef': 'off',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',

    'vue/script-setup-uses-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/define-macros-order': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-bare-strings-in-template': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-ref-object-destructure': 'error',
    'vue/no-required-prop-with-default': 'error',
    'vue/require-prop-comment': 'error',

    // 'vue/require-expose': 'error',

    // 'import/default': 'off',
    //   'vue/script-setup-uses-vars': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',

    'prettier-vue/prettier': [
      'error',
      {
        // Override all options of `prettier` here
        // @see https://prettier.io/docs/en/options.html
      },
    ],
  },
}
