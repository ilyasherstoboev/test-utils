import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheToggle from '../TheToggle.vue'

describe('TheToggle', () => {
  it('transitions', async () => {
    const wrapper = mount(TheToggle)

    expect(wrapper.find('hello').exists()).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(wrapper.get('p').text()).toBe('hello')
  })
})
