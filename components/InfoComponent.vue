<template>
  <main class="info">
    <div class="info__about">
      <h2 class="info__headline">EL-service på hele Lolland og Falster</h2>
      <p class="info__paragraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren. <br><br> No sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren.<br><br> No sea takimata sanctus est Lorem ipsum dolor
        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
        dolor sit amet. Lorem ipsum dolor sit
      </p>

      <div class="info__buttons">
        <router-link class="buttons__link" to="#About">OM OS</router-link>
        <router-link class="buttons__link" to="#Services">SERVICES</router-link>
      </div>

      <div class="info__image-container">
        <img src="../assets/Wires.jpg" class="image-container__image" />
        <img src="../assets/Relay.jpg" class="image-container__image" />
        <img src="../assets/Dahl.jpg" class="image-container__image" />
      </div>
    </div>

  </main>
</template>

<script>

export default {
  name: "InfoComponent",
  components: {

  },
  props: {},
  
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.info {
  display: grid;
  &__headline {
    @include headline;
    text-align: left;
    padding: 0 5%;
    margin: 77px 0 32px 0;
  }
  &__paragraph {
    @include paragraph;
    text-align: justify;
    padding: 0 5%;
    margin-bottom: 32px;
  }

  &__buttons {
    display: flex;
    justify-content: space-evenly;
    height: 196px;
    background-image: url("../assets/Lolland-Falster.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__image-container {
    display: flex;
    flex-direction: column;
  }
}

.image-container__image {
  width: 100%;
  margin-bottom: 43px;
  padding:0 5%;
  box-sizing:border-box;
}

.image-container__image:nth-child(3) {
  margin-bottom: 0;
}
.buttons__link {
  background-color: $border-blue;
  width: 35%;
  text-align: center;
  text-decoration: none;
  font-weight: 300;
  @include paragraph($white, $paragraph);
  padding: 9px 0;
  height: 25px;
}

@media (min-width: 600px) {
  .info {
    background-image: url("../assets/Lolland-Falster.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display:flex;
    &__about{
      width:60%;
    }
    &__headline {
      @include headline(null, $headline--desktop);
      grid-column: 1/2;
      padding: 0 10%;
    }
    &__paragraph {
      @include paragraph(null,$paragraph--desktop);
      padding: 0 10%;
      grid-column: 1/2;
    }

    &__buttons {
      justify-content: space-between;
      padding:0 10%;
      width: 100%;
      height: fit-content;
      background-image: none;
      margin-bottom: 50px;
      max-width: 450px;
      grid-column: 1/2;
      box-sizing:border-box;
    }

    &__image-container {
      flex-direction: row;
      padding: 0 10%;
      justify-content: space-between;
      grid-column: 1/-1;
    }
  }

  .image-container__image {
    width: 25%;
    margin-bottom: 0;
    padding:0;
  }

  .buttons__link {
    font-size: 14px;
    width: 45%;
    padding: 9px 0 6px 0;

  }
}

@media (min-width: 1000px) {
  .info {
    background-image: url("../assets/Lolland-Falster.svg");
    background-repeat: no-repeat;
    background-size: cover;
    display:grid;
    grid-template-columns: 1.5fr 1fr;
    
    &__about{
      width:100%;
    }

    &__paragraph {
      padding: 0 10%;
    }

    &__buttons {
      padding-left: 10%;
    }

    &__image-container {
      grid-column: 1/2;
      padding-left:10%;
      width:80%;
    }
  }

  .image-container__image {
    width: 25%;
    margin-bottom: 0;
  }
}
</style>