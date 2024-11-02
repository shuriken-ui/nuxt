import { existsSync } from 'node:fs'
import { copyFile, writeFile } from 'node:fs/promises'
import process from 'node:process'
import { fileURLToPath } from 'node:url'
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

    process.exit(1)
  }

  const components = await import(inputSource).then(m => m.default || m)

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

main().catch((error) => {
  console.error(error)

  process.exit(1)
})
