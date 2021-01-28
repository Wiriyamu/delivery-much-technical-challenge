import Generation from '@/views/Generation'
import { mount } from '@vue/test-utils'

window.console.warn = jest.fn()

describe('Generation.vue', () => {
  it('should find GenerationsPokemons.vue component', () => {
    const wrapper = mount(Generation)

    expect(wrapper.findComponent({ name: 'InfoGeneration' }).exists()).toBe(
      true
    )
  })
})
