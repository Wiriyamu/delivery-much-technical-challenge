<template>
  <section class="pokemon">
    <div class="pokemon__container">
      <header class="pokemon__header">
        <img
          class="pokemon__img"
          src="../../assets/pikachu2.png"
          alt="Pikachu"
        />
        <div>
          <router-link class="pokemon__back" :to="`/generation/${generation}`"
            >Página Anterior</router-link
          >
          <router-link class="pokemon__back" to="/">Home</router-link>
        </div>
      </header>

      <div class="pokemon__infos">
        <h1 class="pokemon__name">{{ pokemonName }}</h1>
        <div class="pokemon__imgBox">
          <img
            class="pokemon__front"
            :src="state.pokemon.front"
            alt="pokemon"
          />

          <img
            class="pokemon__front"
            src="../../assets/pokeball.png"
            alt="Pokeball"
          />
        </div>

        <section class="pokemon__card">
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
import { useRoute } from 'vue-router'

export default {
  name: 'InfoPokemon',
  props: ['name', 'generation'],
  setup() {
    const state = reactive({
      pokemon: {
        name: '',
        types: [],
        abilities: [],
        stats: [],
        front: ''
      }
    })
    const route = useRoute()

    async function getInfoPokemonChoice() {
      const pokemonChoice = route.params.name
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`
      )
      const data = await response.json()
      state.pokemon.name = data.name
      state.pokemon.type = data.types
      state.pokemon.front = data.sprites.front_default
      state.pokemon.abilities = data.abilities
      state.pokemon.stats = data.stats
    }
    getInfoPokemonChoice()

    const pokemonName = computed(() => {
      const newName = state.pokemon.name.slice(1)
      const firstCharacter = state.pokemon.name.charAt(0).toUpperCase()
      return firstCharacter + newName
    })

    const pokemonWeight = computed(() =>
      parseFloat(state.pokemon.weight).toFixed(1)
    )

    return { state, pokemonName, pokemonWeight }
  }
}
</script>

<style lang="scss" scoped>
.pokemon {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #3761a8;

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
    max-width: 120px;
  }

  &__back {
    margin: 5px 0 0 20px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #ef5350;

    &:hover {
      transition: 0.3s ease-in;
      background-color: #feca1b;
    }
  }

  &__infos {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 20px 20px;
    border-radius: 10px;
    background-color: #fff;
  }

  &__name {
    font-size: 2rem;
  }

  &__imgBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__front {
    width: 150px;
  }

  &__card {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
