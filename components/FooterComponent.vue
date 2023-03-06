<template>
  <footer class="footer">
      <router-link to="#" class="link">
        <span class="link--black link--default-colour link--big-text"
          >DAHL</span
        >
        <span class="link--medium">
          <hr class="link__line link__darken" />
          <span class="link--lighten">ELFIRMA</span>
          <span class="link--darken">NAKSKOV</span></span
        >
      </router-link>
        <p class="footer__credit">Design af Peter Eilerskov</p>
        <p class="footer__credit">Kodet af Nikolai Raahauge</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_colours";

.footer{
display: flex;
align-content: center;
flex-wrap: wrap;
flex-direction:column;
list-style-type: none;
background-color:$border-blue;
height:200px;
  &__credit{
    color:$white;
    font-size:2vw;
    text-align:center;
  }
  &__credit:nth-child(2){
    margin-top:50px;
  }
}

.link {
  text-decoration: none;
  display: flex;
  transform:translateX(-6px);
  height:fit-content;
  margin-top:25px;
  font-size: 4vw;
  //grid-template-columns: 0.44fr 1fr;

  &--default-colour {
    color: $white;
  }

  &--black {
    font-weight: 900;
    grid-column: 1/2;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
  }

  &--big-text {
    font-size: 6.5vw;
    transform:translateX(-6px);
  }

  &--medium {
    font-weight: 500;
    grid-column: 2/3;
    grid-row: 1;
    display: flex;
    align-items: center;
  }

  &--lighten {
    color: $white;
    transform:translateX(6px);
    //margin-right: 4px;
  }

  &--darken {
    color: $white;
    transform:translateX(12px);
  }

  &__line {
    height: 55%;
    //margin: 0 7.3%;
    border: solid $white 0.05em;
  }
}

@media (min-width: 600px) {

  .footer__credit{
    font-size:10px;
  }

.link {
    font-size:14px;
  &--big-text {
    font-size: 25px;
  }

  &__line {
    height: 55%;
    border: solid $white 0.5px;
  }
}
}

@media (min-width: 1000px) {
}
</style>