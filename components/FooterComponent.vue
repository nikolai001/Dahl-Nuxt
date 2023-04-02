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
@import "./assets/scss/assets/_collections";

.footer{
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  flex-direction:column;
  list-style-type: none;
  background-color:$border-blue;
  height:200px;
}

.link {
  text-decoration: none;
  display: flex;
  transform:translateX(-6px);
  height:fit-content;
  margin-top:25px;
  @include paragraph($white, 4vw);

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
    @include paragraph(null,6.5vw);
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
    @include paragraph($white,null);
    transform:translateX(6px);
  }

  &--darken {
    @include paragraph($white,null);
    transform:translateX(12px);
  }

  &__line {
    height: 55%;
    border: solid $white 0.05em;
  }
}

@media (min-width: 600px) {

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
</style>