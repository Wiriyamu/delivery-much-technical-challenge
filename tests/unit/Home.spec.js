import Home from '@/views/Home'
import { mount } from '@vue/test-utils'

window.console.warn = jest.fn()

describe('Home.vue', () => {
  it('should find GenerationsPokemons.vue component', () => {
    const wrapper = mount(Home)

    expect(
      wrapper.findComponent({ name: 'GenerationsPokemons' }).exists()
    ).toBe(true)
  })
})
