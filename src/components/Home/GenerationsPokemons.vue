<template>
  <section class="generation">
    <div class="generation__container">
      <header class="generation__header">
        <img src="../../assets/pokeApiLogo.svg" alt="PokéApi" />
      </header>

      <h1 class="generation__title">
        Descubra tudo sobre as gerações de pokemóns!
      </h1>

      <section class="generation__cards-container">
        <div class="generation__card">
          <h2 class="generation__card__name">1° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao1.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="1"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">2° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao2.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="2"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">3° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao3.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="3"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">4° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao4.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="4"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">5° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao5.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="5"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">6° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao6.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="6"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">7° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao7.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="7"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>

        <div class="generation__card">
          <h2 class="generation__card__name">8° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao8.png" />
          </figure>
          <button
            @click="goToRouteGeneration"
            value="8"
            class="generation__card-button"
          >
            Saiba Mais
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'GenerationsPokemons',
  setup() {
    const router = useRouter()

    const goToRouteGeneration = event => {
      const generationChoice = event.target.value
      router.push(`/generation/${generationChoice}/`)
    }
    return { goToRouteGeneration }
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
    justify-content: center;
    margin-top: 2rem;
  }

  &__title {
    margin-top: 2rem;
    text-align: center;
  }

  &__cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    display: grid;
    width: 30rem;
    height: 30rem;
    margin: 5rem 3rem;
    background-color: $colorWhite;
  }

  &__card__name {
    padding-top: 2rem;
    text-align: center;
  }

  &__pokemon {
    display: flex;
    justify-content: center;
  }

  &__card-button {
    padding: 2rem 0;
    color: $colorWhite;
    background-color: $colorRed;

    &:hover {
      transition: 0.3s ease-in;
      background-color: $colorBlue;
    }
  }
}
</style>
