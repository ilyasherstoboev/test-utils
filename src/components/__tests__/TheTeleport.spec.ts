import { describe, expect, it } from 'vitest'
import TheTeleport from '../TheTeleport.vue'
import { mount } from '@vue/test-utils'
import TheSignup from '../TheSignup.vue'

describe('Teleport', () => {
  it('emits a signup event when valid', async () => {
    const wrapper = mount(TheTeleport, {
      global: {
        stubs: {
          teleport: true,
        },
      },
    })
    const signup = wrapper.getComponent(TheSignup)

    await signup.get('input').setValue('valid_username')
    await signup.get('form').trigger('submit.prevent')

    expect(signup.emitted().signup[0]).toEqual(['valid_username'])
  })
})
