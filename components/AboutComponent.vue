<template>
  <main class="about">
      <h2 class="about__headline">Om Dahl Lolland</h2>
      <p class="about__paragraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit
      </p>

      <div class="about__image-container">
        <img src="../assets/DahlCar.png" class="image-container__image" />
      </div>

  </main>
</template>

<script>

export default {
  name: "AboutComponent",
  components: {

  },
  props: {},
  data() {
    return {

    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_colours";

.about {
  overflow-x: hidden;
  display: grid;
  &__headline {
    color: $border-blue;
    font-size: 6.65vw;
    text-align: left;
    padding: 0 5%;
    margin: 77px 0 32px 0;
  }
  &__paragraph {
    color: $dark-grey;
    font-size: 4.27vw;
    text-align: left;
    padding: 0 5%;
    margin-bottom: 32px;
  }

  &__image-container {
    display: flex;
    flex-direction: column;
  }
}

.image-container__image {
  width: 60%;
  padding:0 5%;
  box-sizing:border-box;
  align-self:center;
}

@media (min-width: 600px) {
  .about {
    grid-template-columns: 1fr 1fr;
    display:grid;

    &__headline {
      color: $border-blue;
      font-size: 25px;
      grid-column: 1/2;
      padding: 0 10%;
    }
    &__paragraph {
      color: $dark-grey;
      font-size: 14px;
      padding: 0 10%;
      grid-column: 1/2;
      width:100%;
    }

    &__image-container {
      flex-direction: row;
      padding:0 5% 0 15%;
      justify-content: center;
      grid-column: 2/3;
    }
  }

  .image-container__image {
    width: 100%;
    margin-bottom: 0;
    padding:0;
    height:fit-content;
    max-width:250px;
  }

}

@media (min-width: 1000px) {
  .about {
    display:grid;
    grid-template-columns: 1fr 0.6fr;

    &__headline {
      color: $border-blue;
      font-size: 25px;
    }
    &__paragraph {
      color: $dark-grey;
      font-size: 14px;
      padding: 0 10%;
      width:80%;
    }

    &__image-container {
      grid-column: 2/3;
      padding-left:10%;
      width:100%;
      justify-content:start;
    }
  }

  .image-container__image {
    width: 75%;
    margin-bottom: 0;
  }
}
</style>