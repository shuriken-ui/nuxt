import { BaseSelect } from '#components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { resetNuiAppConfig } from '../../utils'

const TestComponent = {
  template: `
    <BaseSelect v-model="modelValue">
      <option value="41">One</option>
      <option value="42">Two</option>
    </BaseSelect>
  `,
  // forward v-model from BaseSelect
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: {
    BaseSelect,
  },
  setup(props: any, { emit }: any) {
    const modelValue = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value),
    })
    return {
      modelValue,
    }
  },
}

describe('component: BaseSelect', () => {
  describe('usage', () => {
    it('should handle v-model', async () => {
      const component = mount(TestComponent, {
        props: {
          'modelValue': '41',
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
        },
      })

      await component.get('.nui-select').setValue('42')
      expect(component.props('modelValue')).toBe('42')
    })

    it('should handle v-model, direct', async () => {
      const component = mount(BaseSelect, {
        props: {
          'modelValue': '21',
          'onUpdate:modelValue': (e: any) => component.setProps({ modelValue: e }),
        },
        slots: {
          default: [
            `<option value="21">One</option>`,
            `<option value="22">Two</option>`,
          ].join(''),
        },
      })

      await component.get('.nui-select').setValue('22')
      expect(component.props('modelValue')).toBe('22')
    })
  })

  describe('rendering', () => {
    beforeEach(() => {
      resetNuiAppConfig('BaseSelect')
    })

    it('should render with custom app.config', async () => {
      useAppConfig().nui.BaseSelect!.size = 'sm'
      useAppConfig().nui.BaseSelect!.rounded = 'lg'

      const component = mount(BaseSelect)

      const wrapper = component.get('.nui-select-wrapper')
      expect(wrapper.classes('nui-select-sm')).toBeTruthy()
      expect(wrapper.classes('nui-select-rounded-lg')).toBeTruthy()
    })

    it('should render with default app.config', async () => {
      const component = mount(BaseSelect)

      const wrapper = component.get('.nui-select-wrapper')
      expect(wrapper.classes('nui-select-md')).toBeTruthy()
      expect(wrapper.classes('nui-select-rounded-sm')).toBeTruthy()
    })

    it('should render with props', async () => {
      const component = mount(BaseSelect, {
        props: {
          size: 'lg',
          rounded: 'md',
        },
      })

      const wrapper = component.get('.nui-select-wrapper')
      expect(wrapper.classes('nui-select-lg')).toBeTruthy()
      expect(wrapper.classes('nui-select-rounded-md')).toBeTruthy()
    })

    it('should render error', async () => {
      const component = mount(BaseSelect, {
        props: {
          error: 'test',
        },
      })

      const wrapper = component.get('.nui-select-wrapper')
      const help = component.get('.nui-input-help-text')
      expect(wrapper.classes('nui-select-error')).toBeTruthy()
      expect(help.classes('text-danger-500')).toBeTruthy()
      expect(help.text()).toBe('test')
    })

    it('should render disabled state', async () => {
      const component = mount(BaseSelect, {
        props: {
          disabled: true,
        },
      })

      const select = component.get('.nui-select')
      expect(select.attributes('disabled')).toBeDefined()
    })

    it('should render with placeholder', async () => {
      const component = mount(BaseSelect, {
        props: {
          placeholder: 'Select an option',
        },
      })

      const option = component.get('option')
      expect(option.text()).toBe('Select an option')
      expect(option.attributes('disabled')).toBeDefined()
      expect(option.attributes('hidden')).toBeDefined()
    })
  })
})
