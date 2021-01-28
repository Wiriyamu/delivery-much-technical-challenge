<template>
  <section class="pokemon">
    <div class="pokemon__container">
      <header class="pokemon__header">
        <img
          class="pokemon__pikachu-img"
          src="../../assets/pikachu2.png"
          alt="Pikachu"
        />
        <div>
          <router-link
            class="pokemon__goto-page-generations"
            :to="`/generation/${generation}`"
            >Página Anterior</router-link
          >
          <router-link class="pokemon__goto-page-home" to="/">Home</router-link>
        </div>
      </header>

      <div class="pokemon__informations">
        <h1 class="pokemon__name">{{ pokemonName }}</h1>
        <div class="pokemon__images-box">
          <img
            class="pokemon__pokemon-front"
            :src="state.pokemon.front"
            alt="pokemon"
          />

          <img
            class="pokemon__pokeball"
            src="../../assets/pokeball.png"
            alt="Pokeball"
          />
        </div>

        <section class="pokemon__stats">
          <ul>
            <h4>Tipo</h4>
            <li v-for="type in state.pokemon.type" :key="type.slot">
              <p>{{ type.type.name }}</p>
            </li>
          </ul>

          <ul>
            <h4>Habilidades</h4>
            <li v-for="ability in state.pokemon.abilities" :key="ability.slot">
              <p>{{ ability.ability.name }}</p>
            </li>
          </ul>

          <ul>
            <h4>Status</h4>
            <li v-for="status in state.pokemon.stats" :key="status.stat.name">
              <p>{{ status.stat.name }}: {{ status.base_stat }}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, reactive } from 'vue'
import axios from 'axios'

export default {
  name: 'InfoPokemon',
  props: ['name', 'generation'],
  setup(props) {
    const state = reactive({
      pokemon: {
        name: '',
        type: [],
        abilities: [],
        stats: [],
        front: ''
      }
    })

    async function getInfoPokemonChoice() {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.name}`
      )
      state.pokemon.name = data.name
      state.pokemon.type = data.types
      state.pokemon.front = data.sprites.front_default
      state.pokemon.abilities = data.abilities
      state.pokemon.stats = data.stats
    }
    getInfoPokemonChoice()

    const pokemonName = computed(() => {
      const nameSlice = state.pokemon.name.slice(1)
      const firstCharacter = state.pokemon.name.charAt(0).toUpperCase()
      return firstCharacter + nameSlice
    })

    return { state, pokemonName }
  }
}
</script>

<style lang="scss" scoped>
@import '@/sass/main.scss';

.pokemon {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $colorBlue;

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
    max-width: 12rem;
  }

  &__goto-page-generations,
  &__goto-page-home {
    margin: 0.3125rem 0 0 2rem;
    padding: 0.625rem 2rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    color: $colorWhite;
    background-color: $colorRed;

    &:hover {
      transition: 0.3s ease-in;
      background-color: $colorBase;
    }
  }

  &__informations {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem 2rem;
    border-radius: 0.625rem;
    background-color: $colorWhite;
  }

  &__name {
    font-size: 2rem;
  }

  &__images-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__pokemon-front,
  &__pokeball {
    width: 15rem;
  }

  &__stats {
    display: flex;
    justify-content: space-between;
    margin-top: 0.625rem;
  }
}
</style>
