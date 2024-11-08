import { BaseInput } from '#components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { resetNuiAppConfig } from '../../utils'

describe('component: BaseInput', () => {
  describe('usage', () => {
    it('should handle v-model', async () => {
      const component = mount(BaseInput, {
        props: {
          'modelValue': 'initialText',
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
        },
      })

      await component.get('.nui-input').setValue('test ')
      expect(component.props('modelValue')).toBe('test ')
    })

    it('should handle v-model, with trim modifier', async () => {
      const component = mount(BaseInput, {
        props: {
          'modelValue': 'initialText',
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
          // @ts-expect-error - remove after https://github.com/vuejs/language-tools/pull/4978
          'modelModifiers': { trim: true },
        },
      })

      await component.get('.nui-input').setValue('test ')
      expect(component.props('modelValue')).toBe('test')
    })

    it('should handle v-model, with number modifier', async () => {
      const component = mount(BaseInput, {
        props: {
          'modelValue': 1,
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
          // @ts-expect-error - remove after https://github.com/vuejs/language-tools/pull/4978
          'modelModifiers': { number: true },
        },
      })

      await component.get('.nui-input').setValue('42')
      expect(component.props('modelValue')).toBe(42)
    })

    it('should handle v-model, with number modifier, to handle decimals', async () => {
      const component = mount(BaseInput, {
        props: {
          'modelValue': 1,
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
          // @ts-expect-error - remove after https://github.com/vuejs/language-tools/pull/4978
          'modelModifiers': { number: true },
        },
      })

      await component.get('.nui-input').setValue('42.24')
      expect(component.props('modelValue')).toBe(42.24)
    })

    it('should handle v-model, with number modifier, to fallback to original string', async () => {
      const component = mount(BaseInput, {
        props: {
          'modelValue': 1,
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
          // @ts-expect-error - remove after https://github.com/vuejs/language-tools/pull/4978
          'modelModifiers': { number: true },
        },
      })

      await component.get('.nui-input').setValue('hello')
      expect(component.props('modelValue')).toBe('hello')
    })
  })

  describe('rendering', () => {
    beforeEach(() => {
      resetNuiAppConfig('BaseInput')
    })

    it('should render with custom app.config', async () => {
      useAppConfig().nui.BaseInput!.size = 'sm'
      useAppConfig().nui.BaseInput!.rounded = 'lg'

      const component = mount(BaseInput)

      const wrapper = component.get('.nui-input-wrapper')
      expect(wrapper.classes('nui-input-sm')).toBeTruthy()
      expect(wrapper.classes('nui-input-rounded-lg')).toBeTruthy()
    })

    it('should render with default app.config', async () => {
      const component = mount(BaseInput)

      const wrapper = component.get('.nui-input-wrapper')
      expect(wrapper.classes('nui-input-md')).toBeTruthy()
      expect(wrapper.classes('nui-input-rounded-sm')).toBeTruthy()
    })

    it('should render with props', async () => {
      const component = mount(BaseInput, {
        props: {
          size: 'lg',
          rounded: 'md',
        },
      })

      const wrapper = component.get('.nui-input-wrapper')
      expect(wrapper.classes('nui-input-lg')).toBeTruthy()
      expect(wrapper.classes('nui-input-rounded-md')).toBeTruthy()
    })

    it('should render error', async () => {
      const component = mount(BaseInput, {
        props: {
          error: 'test',
        },
      })

      const wrapper = component.get('.nui-input-wrapper')
      const help = component.get('.nui-input-help-text')
      expect(wrapper.classes('nui-input-error')).toBeTruthy()
      expect(help.classes('text-danger-500')).toBeTruthy()
      expect(help.text()).toBe('test')
    })

    it('should render disabled state', async () => {
      const component = mount(BaseInput, {
        props: {
          disabled: true,
        },
      })

      const input = component.get('.nui-input')
      expect(input.attributes('disabled')).toBeDefined()
    })

    it('should render with placeholder', async () => {
      const component = mount(BaseInput, {
        props: {
          placeholder: 'Enter text',
        },
      })

      const input = component.get('.nui-input')
      expect(input.attributes('placeholder')).toBe('Enter text')
    })
  })
})
