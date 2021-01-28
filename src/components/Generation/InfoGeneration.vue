<template>
  <section class="generation">
    <div class="generation__container">
      <header class="generation__header">
        <img
          class="generation__pikachu-img"
          src="../../assets/pikachu.png"
          alt="Pikachu"
        />
        <nav class="generation__navigation">
          <h1 class="generation__id-generation">{{ id }}° Geração</h1>
          <router-link class="generation__back-home" to="/">Home</router-link>
        </nav>
      </header>

      <section class="generation__informations">
        <figure>
          <p class="generation__amount">
            <strong class="generation__amount-strong">{{
              pokemonsAmount
            }}</strong>
            Pokemóns Encontrados
          </p>
          <img src="../../assets/pokedex.png" alt="Pokédex" />
        </figure>
      </section>

      <ul>
        <li
          class="generation__pokemon"
          v-for="pokemon in state.generation.pokemonSpecies"
          :key="pokemon.id"
        >
          <h3>{{ pokemon.name }}</h3>
          <button
            @click="goToRoutePokemon(pokemon)"
            class="generation__pokemon-button"
          >
            Saiba Mais
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default {
  name: 'InfoGeneration',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      generation: {
        id: null,
        name: '',
        pokemonSpecies: []
      }
    })
    const router = useRouter()

    async function getInfoGenerationChoice() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/generation/${props.id}`
      )
      state.generation.id = data.id
      state.generation.name = data.name
      state.generation.pokemonSpecies = data.pokemon_species
    }
    getInfoGenerationChoice()

    const pokemonsAmount = computed(
      () => state.generation.pokemonSpecies.length
    )

    const goToRoutePokemon = ({ name }) => {
      router.push(`/pokemon/${name}/${props.id}`)
    }
    return { state, pokemonsAmount, goToRoutePokemon }
  }
}
</script>

<style lang="scss" scoped>
@import '@/sass/main.scss';
.generation {
  width: 100%;

  &__container {
    @include container;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  &__pikachu-img {
    max-width: 15rem;
  }

  &__informations {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
  }

  &__back-home {
    margin-top: 0.3125rem;
    padding: 0.625rem 0.625rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    color: $colorWhite;
    background-color: $colorRed;

    &:hover {
      transition: 0.3s ease-in;
      background-color: $colorBlue;
    }
  }

  &__amount {
    margin: 0.3125rem 0;
    font-size: 2rem;
  }

  &__amount-strong {
    color: $colorBlue;
  }

  &__pokemon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
    padding: 2rem 0.625rem;
    background-color: $colorWhite;
  }

  &__pokemon-button {
    margin-top: 0.3125rem;
    padding: 0.625rem 2rem;
    font-weight: bold;
    text-align: center;
    color: $colorWhite;
    background-color: $colorRed;

    &:hover {
      transition: 0.3s ease-in;
      background-color: $colorBlue;
    }
  }
}
</style>
