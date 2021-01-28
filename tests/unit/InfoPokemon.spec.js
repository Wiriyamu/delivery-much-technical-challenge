import InfoPokemon from '@/components/Pokemon/InfoPokemon'
import { shallowMount } from '@vue/test-utils'

window.console.warn = jest.fn()

describe('InfoPokemon.vue', () => {
  it('should render state default correctly', () => {
    const wrapper = shallowMount(InfoPokemon)

    expect(wrapper.vm.state.pokemon.name).toBe('')
    expect(wrapper.vm.state.pokemon.type).toEqual([])
    expect(wrapper.vm.state.pokemon.abilities).toEqual([])
    expect(wrapper.vm.state.pokemon.stats).toEqual([])
    expect(wrapper.vm.state.pokemon.front).toEqual('')
  })

  it('should render props correctly', () => {
    const wrapper = shallowMount(InfoPokemon, {
      props: {
        name: 'charmander',
        generation: 1
      }
    })

    expect(wrapper.props('name')).toBe('charmander')
    expect(wrapper.props('generation')).toBe(1)
  })
})
