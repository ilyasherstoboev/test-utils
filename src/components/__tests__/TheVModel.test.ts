import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('VModel', () => {
  it('modelValue should be updated', async () => {
    const Editor = {
      props: {
        label: String,
        modelValue: String,
      },
      emits: ['update:modelValue'],
      template: `<div>
        <label>{{label}}</label>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      </div>`,
    }

    const wrapper = mount(Editor, {
      props: {
        modelValue: 'initialText',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
      },
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })

  it('Multiple modelValue', async () => {
    const MoneyEditor = {
      template: `<div>
        <input :value="currency" @input="$emit('update:currency', $event.target.value)"/>
        <input :value="modelValue" type="number" @input="$emit('update:modelValue', $event.target.value)"/>
      </div>`,
      props: ['currency', 'modelValue'],
      emits: ['update:currency', 'update:modelValue'],
    }

    const wrapper = mount(MoneyEditor, {
      props: {
        modelValue: 'initialText',
        'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e }),
        currency: '$',
        'onUpdate:currency': (e: string) => wrapper.setProps({ currency: e }),
      },
    })

    const [currencyInput, modelValueInput] = wrapper.findAll('input')
    await modelValueInput.setValue('100')
    await currencyInput.setValue('£')

    expect(wrapper.props('modelValue')).toBe('100')
    expect(wrapper.props('currency')).toBe('£')
  })
})
