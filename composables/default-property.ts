export const useNuiDefaultProperty = (
  properties: any,
  component: string,
  property: string,
): Ref<string> => {
  const config = useAppConfig().nui as any
  return computed(() => {
    return properties?.[property] ?? config?.[component]?.[property]
  })
}
