import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'node_modules',
      'dist',
      '.component-meta',
      '.vscode',
      '.github',
      '**/.nuxt/**',
      '**/.output/**',
      'CHANGELOG.md',
      'README.md',
      'LICENSE.md',
    ],
  },
)
