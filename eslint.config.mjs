import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0,
    'vue/html-self-closing': 0
  }
})
