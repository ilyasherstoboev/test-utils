import { describe, expect, it, vi } from 'vitest'
import useCounter from '../../../app/composables/useCounter'
import useUser from '../../../app/composables/useUser'
import axios from 'axios'
import { defineComponent, h, inject } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import TheProvide from '../TheProvide.vue'

describe('useCounter', () => {
  it('inc counter on call', () => {
    const { counter, increase } = useCounter()

    expect(counter.value).toBe(0)

    increase()

    expect(counter.value).toBe(1)
  })

  it('fetch user on mount', async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: { id: 1, name: 'User' } })

    const TestComponent = defineComponent({
      props: {
        userId: {
          type: Number,
          required: true,
        },
      },
      setup(props) {
        return {
          ...useUser(props.userId),
        }
      },
    })

    const wrapper = mount(TestComponent, {
      props: {
        userId: 1,
      },
    })

    expect(wrapper.vm.user).toBeUndefined()
    await flushPromises()

    expect(wrapper.vm.user).toEqual({ id: 1, name: 'User' })
  })

  it('provides correct data', () => {
    const TestComponent = defineComponent({
      template: '<span id="provide-test">{{value}}</span>',
      setup () {
        const value = inject('my-key')
        return { value }
      }
    })

    const wrapper = mount(TheProvide, {
      slots: {
        default: () => h(TestComponent)
      }
    });

    expect(wrapper.find('#provide-test').text()).toBe('some-data')
  })
})
