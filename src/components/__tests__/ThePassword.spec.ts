import { describe, expect, it } from 'vitest'
import ThePassword from '../ThePassword.vue'
import { mount } from '@vue/test-utils'

describe('ThePassword', () => {
  it('min length', async () => {
    const minLength = 10
    const wrapper = mount(ThePassword, {
      props: {
        minLength,
      },
    })

    wrapper.find('input').setValue('short')
    expect(wrapper.html()).toContain(`Password must be at least ${minLength} characters.`)
  })
})
