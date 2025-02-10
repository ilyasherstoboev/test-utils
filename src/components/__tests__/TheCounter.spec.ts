import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheCounter from '../TheCounter.vue'

describe('TheCounter', () => {
  const wrapper = mount(TheCounter)

  it('emits', () => {
    wrapper.trigger('click')
    const increment = wrapper.emitted('increment')

    expect(increment).toHaveLength(1)

    wrapper.trigger('click')
    wrapper.trigger('click')

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
})
