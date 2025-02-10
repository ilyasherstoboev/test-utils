import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ButtonBlur from '../ButtonBlur.vue'

describe('ButtonBlur', () => {
  it('lost fucus', () => {
    const wrapper = mount(ButtonBlur)

    const componentToGetFocus = wrapper.find('button')

    wrapper.find('input').trigger('blur', {
      relatedTarget: componentToGetFocus.element,
    })

    expect(wrapper.emitted('focus-lost')).toBeTruthy()
  })
})
