import Pokemon from '@/views/Pokemon'
import { mount } from '@vue/test-utils'

window.console.warn = jest.fn()

describe('Pokemon.vue', () => {
  it('should find GenerationsPokemons.vue component', () => {
    const wrapper = mount(Pokemon)

    expect(wrapper.findComponent({ name: 'InfoPokemon' }).exists()).toBe(true)
  })
})
