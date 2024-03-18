import type { AppConfig } from 'nuxt/schema'

export function useNuiDefaultProperty<
  T extends Record<string, unknown>,
  K extends keyof T,
>(
  properties: T,
  component: keyof AppConfig['nui'],
  property: K,
): Ref<NonNullable<T[K]>> {
  const config = useAppConfig().nui as any
  return computed(() => {
    return properties?.[property] ?? config?.[component]?.[property]
  })
}
