export function useNuiDefaultProperty<
  T extends Record<string, unknown>,
  K extends keyof T,
>(properties: T, component: string, property: K): Ref<T[K]> {
  const config = useAppConfig().nui as any
  return computed(() => {
    return properties?.[property] ?? config?.[component]?.[property]
  })
}
