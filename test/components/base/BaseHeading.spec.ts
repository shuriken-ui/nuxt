import { BaseHeading } from '#components'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('component: BaseHeading', () => {
  describe('usage', () => {
    it('should show default slot', async () => {
      const component = mount(BaseHeading, {
        slots: {
          default: () => 'Default Slot',
        },
      })
      expect(component.text()).toMatchInlineSnapshot(
        '"Default Slot"',
      )
    })
  })
})
