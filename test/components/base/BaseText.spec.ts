import { BaseText } from '#components'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('component: BaseText', () => {
  describe('usage', () => {
    it('should show default slot', async () => {
      const component = mount(BaseText, {
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
