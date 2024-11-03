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

    it('should', async () => {
      expect(true).toBeTruthy()
    })
  })
})
