import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TodoApp from '../TodoApp.vue'

describe('TODO', () => {
  const wrapper = mount(TodoApp)

  it('renders a TODO', () => {
    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)
    expect(wrapper.findAll('[data-test="form"]')).toHaveLength(1)
  })

  it('creates a TODO', async () => {
    await wrapper.get('[data-test="new-todo"]').setValue('New todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  it('completes a TODO', async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
