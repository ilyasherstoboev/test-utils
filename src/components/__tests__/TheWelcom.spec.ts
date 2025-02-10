import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('check slot', () => {
    const mainSlot = 'MainContent'
    const footerlot = 'footerContent'
    const wrapper = mount(TheWelcome, {
      slots: {
        welcome: ({ text }) => `Hello ${text}`,
        default: mainSlot,
        footer: footerlot,
      },
    })

    expect(wrapper.text()).toContain(mainSlot)
    expect(wrapper.text()).toContain(footerlot)
    expect(wrapper.text()).toContain('Hello world')
  })
})
