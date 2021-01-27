<template>
  <section class="generation">
    <div class="generation__container">
      <header class="generation__header">
        <img src="../../assets/pokeApiLogo.svg" alt="pokemon api logo" />
      </header>

      <h1 class="generation__description">
        Descubra tudo sobre as gerações de pokemóns!
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GenerationsPokemons',
  setup() {
    return {}
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
}
</style>
