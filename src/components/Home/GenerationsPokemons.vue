<template>
  <section class="generation">
    <div class="generation__container">
      <header class="generation__header">
        <img src="../../assets/pokeApiLogo.svg" alt="pokemon api logo" />
      </header>

      <h1 class="generation__description">
        Descubra tudo sobre as gerações de pokemóns!
      </h1>

      <section class="generation__cardsContainer">
        <div class="generation__cards">
          <h2 class="generation__cardName">1° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao1.png" />
          </figure>
          <button @click="routeGeneration" value="1" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">2° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao2.png" />
          </figure>
          <button @click="routeGeneration" value="2" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">3° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao3.png" />
          </figure>
          <button @click="routeGeneration" value="3" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">4° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao4.png" />
          </figure>
          <button @click="routeGeneration" value="4" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">5° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao5.png" />
          </figure>
          <button @click="routeGeneration" value="5" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">6° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao6.png" />
          </figure>
          <button @click="routeGeneration" value="6" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">7° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao7.png" />
          </figure>
          <button @click="routeGeneration" value="7" class="generation__button">
            Saiba Mais
          </button>
        </div>

        <div class="generation__cards">
          <h2 class="generation__cardName">8° Geração</h2>
          <figure class="generation__pokemon">
            <img src="../../assets/pokemonGeracao8.png" />
          </figure>
          <button @click="routeGeneration" value="8" class="generation__button">
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

    const routeGeneration = event => {
      const property = event.target.value
      router.push(`/generation/${property}/`)
    }
    return { routeGeneration }
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
    justify-content: center;
    margin-top: 2rem;
  }

  &__description {
    margin-top: 2rem;
    text-align: center;
  }

  &__cardsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-auto-columns: 300px 300px;
  }

  &__cards {
    display: grid;
    width: 300px;
    height: 300px;
    margin: 50px 30px;
    background-color: #fff;
  }

  &__cardName {
    padding-top: 20px;
    text-align: center;
  }

  &__pokemon {
    display: flex;
    justify-content: center;
  }

  &__button {
    padding: 20px 0;
    color: #fff;
    cursor: pointer;
    background-color: #ef5350;

    &:hover {
      transition: 0.3s ease-in;
      background-color: #3761a8;
    }
  }
}
</style>
