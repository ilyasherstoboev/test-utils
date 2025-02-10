import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheForms from '../TheForms.vue'

describe('TheForms', () => {
  const wrapper = mount(TheForms)

  it('check form', async () => {
    const formDefault = {
      email: 'my@gmail.com',
      description: 'lorem',
      city: 'moscow',
    }

    await wrapper.find('input[type=email]').setValue(formDefault.email)
    await wrapper.find('textarea').setValue(formDefault.description)
    await wrapper.find('select').setValue(formDefault.city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()

    await wrapper.trigger('submit')

    expect(wrapper.emitted('submit')?.[0][0]).toStrictEqual({
      ...formDefault,
      subscribe: true,
      interval: 'monthly',
    })
  })
})
