<template>
  <section class="generation">
    <div class="generation__container">
      <header class="generation__header">
        <img
          class="generation__img"
          src="../../assets/pikachu.png"
          alt="Pikachu"
        />
        <nav class="generation__nav">
          <h1 class="generation__id">{{ id }}° Geração</h1>
          <router-link class="generation__back" to="/">Home</router-link>
        </nav>
      </header>

      <section class="generation__infos">
        <figure>
          <p class="generation__amount">
            <strong>{{ pokemonsLength }}</strong> Pokemóns Encontrados
          </p>
          <img src="../../assets/pokedex.png" alt="Pokédex" />
        </figure>
      </section>

      <ul>
        <li
          class="generation__pokemon"
          v-for="pokemon in state.pokemonSpecies"
          :key="pokemon.id"
        >
          <h3>{{ pokemon.name }}</h3>
          <button @click="pokemonInfos(pokemon)" class="generation__button">
            Saiba Mais
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'InfoGeneration',
  props: ['id'],
  setup() {
    const state = reactive({
      id: null,
      name: '',
      pokemonSpecies: []
    })
    const router = useRouter()
    const route = useRoute()

    async function getInfoGenerationChoice() {
      const generationChoice = route.params.id
      const response = await fetch(
        `https://pokeapi.co/api/v2/generation/${generationChoice}`
      )
      const data = await response.json()
      console.log(data)
      state.id = data.id
      state.name = data.name
      state.pokemonSpecies = data.pokemon_species
    }
    getInfoGenerationChoice()

    const pokemonsLength = computed(() => state.pokemonSpecies.length)

    const pokemonInfos = ({ name }) => {
      const generationChoice = route.params.id
      router.push(`/pokemon/${name}/${generationChoice}`)
    }
    return { state, pokemonsLength, pokemonInfos }
  }
}
</script>

<style lang="scss" scoped>
.generation {
  width: 100%;

  &__container {
    width: 100%;
    max-width: 998px;
    margin: 0 auto;
    padding: 0 2%;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  &__img {
    max-width: 150px;
  }

  &__infos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
  }

  &__nav {
    display: flex;
    flex-direction: column;
  }

  &__id {
    font-size: 2.5rem;
    color: #263238;
  }

  &__back {
    margin-top: 5px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #ef5350;

    &:hover {
      transition: 0.3s ease-in;
      background-color: #3761a8;
    }
  }

  &__amount {
    margin: 5px 0;
    font-size: 2rem;
  }

  &__pokemon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    padding: 20px 10px;
    list-style-type: none;
    background-color: #fff;
  }

  &__button {
    margin-top: 5px;
    padding: 10px 20px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    background-color: #ef5350;

    &:hover {
      transition: 0.3s ease-in;
      background-color: #3761a8;
    }
  }
}

strong {
  color: #3761a8;
}
</style>
