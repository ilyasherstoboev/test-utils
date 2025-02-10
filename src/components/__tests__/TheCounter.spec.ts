import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheCounter from '../TheCounter.vue'
import { nextTick } from 'vue'

describe('TheCounter', () => {
  const initWrapper = () => {
    const wrapper = mount(TheCounter)
    const button = wrapper.find('button')

    return {
      wrapper,
      button,
    }
  }

  it('emits', () => {
    const { wrapper, button } = initWrapper()

    button.trigger('click')
    const increment = wrapper.emitted('increment')

    expect(increment).toHaveLength(1)

    button.trigger('click')
    button.trigger('click')

    expect(increment).toHaveLength(3)
    expect(increment?.[0]).toEqual([
      {
        count: 1,
        isEven: false,
      },
    ])
    expect(increment?.[1]).toEqual([
      {
        count: 2,
        isEven: true,
      },
    ])
  })

  it('async render DOM', async () => {
    const { wrapper, button } = initWrapper()

    button.trigger('click')
    await nextTick()

    expect(wrapper.find('label').text()).toContain('Count: 1')
  })
})
