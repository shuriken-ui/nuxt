import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'
import { writeFile, copyFile } from 'node:fs/promises'
import { dirname, join } from 'pathe'

const unusedKeys = new Set([
  'declarations',
  'fullPath',
  'shortPath',
  'filePath',
  'schema',
  'priority',
  'preload',
  'prefetch',
  'global',
  'export',
  'mode',
])

function filterKeys(key: string, value: unknown) {
  if (unusedKeys.has(key)) {
    // eslint-disable-next-line unicorn/no-useless-undefined
    return undefined
  }

  return value
}

async function main() {
  const directory = dirname(fileURLToPath(import.meta.url))

  const inputSource = join(directory, '../.playground/.nuxt/component-meta.mjs')
  const outImport = join(directory, '../component-meta.mjs')
  const outRequire = join(directory, '../component-meta.cjs')

  const inputDts = join(directory, '../.playground/.nuxt/component-meta.d.ts')
  const outDts = join(directory, '../component-meta.d.ts')

  if (!existsSync(inputSource) || !existsSync(inputDts)) {
    console.error(
      'component-meta.mjs file does not exists in playground, run "npx nuxt build .playground" to fix',
    )
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1)
  }

  const components = await import(inputSource).then((m) => m.default || m)

  await Promise.all([
    copyFile(inputDts, outDts),
    writeFile(
      outImport,
      `export default ${JSON.stringify(components, filterKeys, 2)}`,
    ),
    writeFile(
      outRequire,
      `module.exports = ${JSON.stringify(components, filterKeys, 2)}`,
    ),
  ])
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch((error) => {
  console.error(error)
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1)
})
