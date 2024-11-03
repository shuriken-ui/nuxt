import { BaseAvatar } from '#components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { resetNuiAppConfig } from '../../utils'

describe('component: BaseAvatar', () => {
  describe('rendering', () => {
    beforeEach(() => resetNuiAppConfig('BaseAvatar'))

    it('should render with custom app.config', async () => {
      // useAppConfig().nui.BaseAvatar!.color = 'primary'
      useAppConfig().nui.BaseAvatar!.size = 'xl'
      useAppConfig().nui.BaseAvatar!.rounded = 'lg'

      const component = mount(BaseAvatar)

      const wrapper = component.get('.nui-avatar')
      // expect(wrapper.classes('nui-avatar-muted')).toBeTruthy()
      expect(wrapper.classes('nui-avatar-xl')).toBeTruthy()
      expect(wrapper.classes('nui-avatar-rounded-lg')).toBeTruthy()
    })

    it('should render with default app.config', async () => {
      const component = mount(BaseAvatar)

      const wrapper = component.get('.nui-avatar')
      // expect(wrapper.classes('nui-avatar-muted')).toBeTruthy()
      expect(wrapper.classes('nui-avatar-sm')).toBeTruthy()
      expect(wrapper.classes('nui-avatar-rounded-full')).toBeTruthy()
    })
  })
})
