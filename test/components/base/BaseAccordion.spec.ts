import { BaseAccordion } from '#components'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { resetNuiAppConfig } from '../../utils'

describe('component: BaseAccordion', () => {
  describe('usage', () => {
    it('should render nothing when items are empty', async () => {
      const component = mount(BaseAccordion, {
        props: {
          items: [],
        },
      })

      const wrapper = component.find('.nui-accordion')

      expect(wrapper.exists()).toBeFalsy()
    })

    it('should render items in DOM', async () => {
      const component = mount(BaseAccordion, {
        props: {
          items: [
            {
              title: 'Title',
              content: 'Content',
            },
          ],
        },
      })

      const wrapper = component.get('.nui-accordion')
      const header = wrapper.get('.nui-accordion-header-inner')
      const content = wrapper.get('.nui-accordion-content')

      expect(header.text()).toMatchInlineSnapshot(
        '"Title"',
      )
      expect(content.text()).toMatchInlineSnapshot(
        '"Content"',
      )
    })

    it('should hide items content by default', async () => {
      const component = mount(BaseAccordion, {
        props: {
          items: [
            {
              title: 'Title 1',
              content: 'Content 1',
            },
            {
              title: 'Title 2',
              content: 'Content 2',
            },
          ],
        },
      })

      const wrappers = component.findAll('.nui-accordion')
      expect(wrappers.length).toBe(2)

      const firstDetails = wrappers[0].get('.nui-accordion-detail')
      const secondDetails = wrappers[1].get('.nui-accordion-detail')
      expect(firstDetails.attributes('open')).toBeUndefined()
      expect(secondDetails.attributes('open')).toBeUndefined()
    })

    it('should show default open items content', async () => {
      const component = mount(BaseAccordion, {
        props: {
          openItems: [1],
          items: [
            {
              title: 'Title 1',
              content: 'Content 1',
            },
            {
              title: 'Title 2',
              content: 'Content 2',
            },
          ],
        },
      })

      const wrappers = component.findAll('.nui-accordion')
      expect(wrappers.length).toBe(2)

      const firstDetails = wrappers[0].get('.nui-accordion-detail')
      const secondDetails = wrappers[1].get('.nui-accordion-detail')
      expect(firstDetails.attributes('open')).toBeUndefined()
      expect(secondDetails.attributes('open')).toBeDefined()
    })

    it('should show content on click on summary', async () => {
      const component = mount(BaseAccordion, {
        props: {
          items: [
            {
              title: 'Title 1',
              content: 'Content 1',
            },
          ],
        },
      })

      const wrapper = component.get('.nui-accordion')
      const detail = wrapper.get('.nui-accordion-detail')

      await wrapper.get('.nui-accordion-summary').trigger('click')
      expect(detail.attributes('open')).toBeDefined()
    })
  })

  describe('rendering', () => {
    beforeEach(() => resetNuiAppConfig('BaseAccordion'))

    it('should render with custom app.config', async () => {
      useAppConfig().nui.BaseAccordion!.color = 'muted'
      useAppConfig().nui.BaseAccordion!.rounded = 'lg'

      const component = mount(BaseAccordion, {
        props: {
          items: [
            {
              title: 'Title',
              content: 'Content',
            },
          ],
        },
      })

      const wrapper = component.get('.nui-accordion')
      expect(wrapper.classes('nui-accordion-muted')).toBeTruthy()
      expect(wrapper.classes('nui-accordion-rounded-lg')).toBeTruthy()
    })

    it('should render with default app.config', async () => {
      const component = mount(BaseAccordion, {
        props: {
          items: [
            {
              title: 'Title',
              content: 'Content',
            },
          ],
        },
      })

      const wrapper = component.get('.nui-accordion')
      expect(wrapper.classes('nui-accordion-default')).toBeTruthy()
      expect(wrapper.classes('nui-accordion-rounded-sm')).toBeTruthy()
    })

    it('should render with props', async () => {
      const component = mount(BaseAccordion, {
        props: {
          color: 'default-contrast',
          rounded: 'md',
          items: [
            {
              title: 'Title',
              content: 'Content',
            },
          ],
        },
      })

      const wrapper = component.get('.nui-accordion')
      expect(wrapper.classes('nui-accordion-default-contrast')).toBeTruthy()
      expect(wrapper.classes('nui-accordion-rounded-md')).toBeTruthy()
    })
  })
})
