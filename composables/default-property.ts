export const useNuiDefaultProperty = (
  properties: any,
  component: string,
  property: string,
): Ref<string> => {
  const config = (useAppConfig()?.appConfig as any)?.nui
  return computed(() => properties[property] ?? config[component]?.[property])
}
