import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { useRouter } from 'vue-router'
import TheRouter from '../TheRouter.vue'
import { afterEach } from 'vitest'

describe('Router', () => {
  const initMock = () => {
    vi.mock('vue-router', () => {
      const push = vi.fn()

      return {
        useRoute: () => ({
          params: {
            id: 1,
          },
        }),
        useRouter: () => ({
          push,
        }),
      }
    })
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('redirect', () => {
    initMock()
    const wrapper = mount(TheRouter, {
      props: {
        isAuthenticated: true,
      },
      global: {
        stubs: ['router-link', 'router-view'],
      },
    })

    wrapper.find('button').trigger('click')

    expect(useRouter().push).toBeCalled()
    expect(useRouter().push).toBeCalledWith('/posts/1/edit')
  })

  it('redirect 404', () => {
    initMock()
    const wrapper = mount(TheRouter, {
      props: {
        isAuthenticated: false,
      },
      global: {
        stubs: ['router-link', 'router-view'],
      },
    })

    wrapper.get('button').trigger('click')
    expect(useRouter().push).toBeCalledTimes(1)
    expect(useRouter().push).toBeCalledWith('/404')
  })
})
