import { BaseProgressCircle } from '#components'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('component: BaseProgressCircle', () => {
  describe('usage', () => {
    it('should show default slot', async () => {
      const component = mount(BaseProgressCircle, {
        props: {
          value: 12,
          max: 42,
        }
      })
      const svg = component.get('svg')
      expect(svg.attributes('aria-valuenow')).toBe('12')
      expect(svg.attributes('aria-valuemax')).toBe('42')
    })
  })
})
