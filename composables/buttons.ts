import type { RouteLocationRaw } from 'vue-router'

export interface BaseButtonProperties {
  type?: 'button' | 'submit' | 'reset'
  to?: RouteLocationRaw
  href?: string
  disabled?: boolean
  rel?: string
  target?: string
}

export function useNinjaButton(properties: BaseButtonProperties, {
  // @todo: make this configurable (design tokens)
  externalDefaultRelationship = 'noopener noreferrer',
  externalDefaultTarget = '_blank',
} = {}) {
  const NuxtLink = defineNuxtLink({})

  const is = computed(() =>
    properties.to ? NuxtLink : properties.href ? 'a' : 'button',
  )
  const type = computed(() => {
    if (is.value === 'button') {
      return properties.type || 'button'
    }
  })
  const external = computed(() => {
    if (typeof properties.to === 'string' && properties.to.startsWith('http')) {
      return true
    }
    else if (
      typeof properties.to === 'object'
      && 'path' in properties.to
      && properties.to.path?.startsWith('http')
    ) {
      return true
    }

    return false
  })
  const relationship = computed(() => {
    if (!external.value) {
      return properties.rel
    }

    return properties.rel ?? externalDefaultRelationship
  })
  const target = computed(() => {
    if (!external.value) {
      return properties.target
    }

    return properties.target ?? externalDefaultTarget
  })

  const attributes = computed(() => ({
    to: properties.disabled ? undefined : properties.to,
    href: properties.disabled ? undefined : properties.href,
    disabled: properties.disabled,
    type: type.value,
    rel: relationship.value,
    target: target.value,
  }))

  return {
    attributes,
    is,
  }
}
