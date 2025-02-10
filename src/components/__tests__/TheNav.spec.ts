import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheNav from '../TheNav.vue'
import { ref } from 'vue'

describe('TheNav', () => {
  const initMount = (options = {}) => {
    return mount(TheNav, options)
  }

  it('render', () => {
    const profileLink = initMount().get('#profile')

    expect(profileLink.text()).toBe('My Profile')
  })

  it("doesn't rander admin link", () => {
    expect(initMount().find('#admin').exists()).toBe(false)
  })

  it('renders ref', async () => {
    const wrapper = initMount({
      setup() {
        const admin = ref(true)
        return { admin }
      },
    })

    expect(wrapper.find('#admin').exists()).toBe(true)
  })

  it('renders v-show', () => {

    const wrapper = initMount({
      setup() {
        return {
          shouldShowDropdown: ref(true),
        }
      },
    })

    expect(wrapper.get('#user-dropdown').isVisible()).toBe(true)
  })
})
