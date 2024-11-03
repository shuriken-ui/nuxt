import defaultConfig from '../../app.config'

export function resetNuiAppConfig(name: string) {
  if (!(name in defaultConfig.nui)) {
    throw new Error(`resetNuiConfig: Unknown configuration with key "${name}"`)
  }

  const nui = useAppConfig().nui as any
  nui[name] = Object.assign({}, (defaultConfig.nui as any)[name])
}
