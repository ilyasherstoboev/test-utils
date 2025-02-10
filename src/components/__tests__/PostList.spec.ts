import { flushPromises, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import PostList from '../PostList.vue'
import axios from 'axios'
import { REQUEST_OPTIONS } from '../../../app/options/requests'
import { POSTS } from '../../../app/constants/JSON'

describe('PostList', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('loads posts on button click', async () => {
    vi.spyOn(axios, 'get').mockResolvedValue({ data: POSTS })
    const wrapper = mount(PostList)

    await wrapper.get('button').trigger('click')

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/api/posts', REQUEST_OPTIONS)

    await flushPromises()

    const posts = wrapper.findAll('[data-test="post"]')

    expect(posts).toHaveLength(2)
    expect(posts[0].text()).toContain('title1')
    expect(posts[1].text()).toContain('title2')
  })

  it('displays loading state on button click', async () => {
    vi.useFakeTimers()
    vi.spyOn(axios, 'get').mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: POSTS })
          }, 100)
        }),
    )

    const wrapper = mount(PostList)
    const button = wrapper.find('button')

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(button.attributes()).not.toHaveProperty('disabled')

    await button.trigger('click')

    expect(wrapper.find('[role="alert"]').exists()).toBe(true)
    expect(button.attributes()).toHaveProperty('disabled')

    vi.advanceTimersByTime(100)
    await flushPromises()

    expect(wrapper.find('[role="alert"]').exists()).toBe(false)
    expect(button.attributes()).not.toHaveProperty('disabled')
  })
})
