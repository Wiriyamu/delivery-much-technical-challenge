import InfoGeneration from '@/components/Generation/InfoGeneration'
import { shallowMount } from '@vue/test-utils'

window.console.warn = jest.fn()

describe('InfoGeneration.vue', () => {
  it('should render state default correctly', () => {
    const wrapper = shallowMount(InfoGeneration)

    expect(wrapper.vm.state.generation.id).toBe(null)
    expect(wrapper.vm.state.generation.name).toBe('')
    expect(wrapper.vm.state.generation.pokemonSpecies).toEqual([])
  })

  it('should render props correctly', () => {
    const wrapper = shallowMount(InfoGeneration, {
      props: {
        id: 1
      }
    })

    expect(wrapper.props('id')).toBe(1)
  })
})
