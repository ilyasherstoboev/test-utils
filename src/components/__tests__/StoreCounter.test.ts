import { setActivePinia, createPinia, defineStore } from 'pinia'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import StoreCounter from '../StoreCounter.vue'
import { ref } from 'vue'

describe('Store', async () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('count', async () => {
    const wrapper = mount(StoreCounter)

    await wrapper.find('button').trigger('click')

    expect(wrapper.html()).toContain('Count: 1')
  })

  it('increment mutation', () => {
    const useStore = defineStore('store', () => {
      const count = ref(0)

      const increment = () => {
        count.value += 1
      }

      return {
        count,
        increment,
      }
    })

    const store = useStore()

    store.increment()

    expect(store.$state.count).toBe(1)
  })

  it('mock store', async () => {
    const useCount = defineStore('counter', () => {
      const count = ref(25)

      const increment = vi.fn()

      return {
        count,
        increment,
      }
    })

    const useStore = defineStore('store', () => {
      return {
        counter: useCount(),
      }
    })

    const store = useStore()
    store.counter.increment = vi.fn()

    const wrapper = mount(StoreCounter, {
      global: {
        provide: {
          store,
        },
      },
    })

    expect(wrapper.html()).toContain('Count: 25')
    await wrapper.find('button').trigger('click')
    expect(store.counter.increment).toHaveBeenCalled()
  })
})
