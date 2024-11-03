import { BaseCard } from '#components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { resetNuiAppConfig } from '../../utils'

describe('component: BaseCard', () => {
  describe('usage', () => {
    it('should show default slot', async () => {
      const component = mount(BaseCard, {
        slots: {
          default: () => 'Default Slot',
        },
      })
      expect(component.text()).toMatchInlineSnapshot(
        '"Default Slot"',
      )
    })
  })
  describe('rendering', () => {
    beforeEach(() => {
      resetNuiAppConfig('BaseCard')
    })

    it('should render with custom app.config', async () => {
      useAppConfig().nui.BaseCard!.color = 'primary'
      useAppConfig().nui.BaseCard!.rounded = 'lg'

      const component = mount(BaseCard)

      const wrapper = component.get('.nui-card')
      expect(wrapper.classes('nui-card-primary')).toBeTruthy()
      expect(wrapper.classes('nui-card-rounded-lg')).toBeTruthy()
    })

    it('should render with default app.config', async () => {
      const component = mount(BaseCard)

      const wrapper = component.get('.nui-card')
      expect(wrapper.classes('nui-card-default')).toBeTruthy()
      expect(wrapper.classes('nui-card-rounded-sm')).toBeTruthy()
    })

    it('should render with props', async () => {
      const component = mount(BaseCard, {
        props: {
          color: 'success',
          rounded: 'md',
        },
      })

      const wrapper = component.get('.nui-card')
      expect(wrapper.classes('nui-card-success')).toBeTruthy()
      expect(wrapper.classes('nui-card-rounded-md')).toBeTruthy()
    })
  })
})
