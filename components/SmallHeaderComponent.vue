<template>
  <header class="header">
    <nav :class="{ 'header__nav--displayed':MenuToggled }" class="header__nav">
      <ul class="nav__list">
        <li class="list__logo">
          <nuxt-link to="/">
          <img src="@/assets/logo.svg" alt="Dahl logo" class="logo__image">
          </nuxt-link>
        </li>
        <li class="list__company">
          <nuxt-link to="/" class="link">
            <span class="link--black link--default-colour link--big-text"
              >DAHL</span
            >
            <span class="link--medium">
              <hr class="link__line link__darken" />
              <span class="link--lighten">ELFIRMA</span>
              <span class="link--darken">NAKSKOV</span></span
            >
          </nuxt-link>
        </li>
        <li class="list__burger">
          <button class="burger__button" @click="MenuToggled = !MenuToggled">
            <img class="button__icon" src="@/assets/burger.svg" />
          </button>
        </li>
      </ul>
      <menu :class="{displayMenu:MenuToggled}" class="header__menu">
        <li class="menu__item">
          <nuxt-link to="/" class="item__link">HJEM</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/Services" class="item__link">SERVICES</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/About" class="item__link">OM OS</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/Galleries" class="item__link">GALLERI</nuxt-link>
        </li>
        <li class="menu__item">
          <nuxt-link to="/Contact" class="item__link">KONTAKT</nuxt-link>
        </li>
      </menu>
    </nav>
    <div class="header__content">
      <img src="@/assets/Wave.svg" class="image__wave" draggable="false">
    </div>
  </header>
</template>

<script>
export default {
  name: "SmallHeaderComponent",
  props: {},
  data() {
    return {
      ContactOpen: false,
      MenuToggled: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";

.header {
  width: 100%;
  display: grid;
  justify-items: center;
  &__nav {
    width: 100%;
    background-color: $white;

    &--displayed{
      position:fixed;
      z-index:4;
    }
  }

  .image__wave{
    display:none;
  }

  &__content {
    background-image: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.78),
        rgba(0, 66, 112, 0.82)
      ),
      url("../assets/bkg.png");
    background-size: 135%;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 68px;
    display: grid;
    grid-template-columns: 1fr;
    width:100%;
    height:100px;
  }
}

.header__menu {
  display:none;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  height: 100vh;
  position: fixed;
  background-color: $white;
  width: 100%;
  z-index: 3;
  padding: 25% 0;
  margin: 0;
}

.displayMenu{
  display:flex;
}

.displayContact{
  display: grid !important;
}

.menu__item {
  margin: 15px 0;
}

.item__link {
  @include paragraph($cta-blue,$menu);
  text-decoration: none;
  font-weight: 500;
}

.nav__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 24px 5%;
  margin: 0;
}

.list__company {
  align-self: center;
}

.list__logo{
  display: none;
}

.list__burger {
  display: flex;
}

.burger__button {
  background-color: transparent;
  border: none;
  outline: none;
}

.link {
  text-decoration: none;
  @include paragraph(null,$input);
  display: grid;
  grid-template-columns: 0.44fr 1fr;
  &--default-colour {
    @include paragraph($blue,null);
  }

  &--black {
    font-weight: 900;
    grid-column: 1/2;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
  }

  &--big-text {
    @include paragraph(null,$big-text);
  }

  &--medium {
    font-weight: 500;
    grid-column: 2/3;
    grid-row: 1;
    display: flex;
    align-items: center;
  }

  &--lighten {
    @include paragraph($light-grey,null);
    margin-right: 4px;
  }

  &--darken {
    @include paragraph($dark-blue,null);
  }

  &__line {
    height: 55%;
    margin: 0 7.3%;
    border: solid $dark-blue 0.05em;
  }
}

@media (min-width: 600px) {

    .header__content {
      background-image: linear-gradient(
          270deg,
          rgba(0, 0, 0, 0.78),
          rgba(0, 66, 112, 0.82)
        ),
        url("../assets/bkg.png");
      background-size: 120%; //set to 120% on bigger screens
      background-repeat: no-repeat;
      background-position: center;
      padding-top: 68px;
      display: grid;
      grid-template-columns: 1fr;
    }
  .header__menu {
    padding: 15% 0;
  }

  .menu__item {
    margin: 15px 0;

  }

  .item__link {
    @include paragraph($cta-blue,$menu--tablet);
    text-decoration: none;
    font-weight: 500;
  }

  .image__wave{
    display:none;
  }

  .nav__list {
    display: flex;
    grid-template-columns:1fr 4fr;
    justify-content: flex-start;
    flex-wrap: nowrap;
    list-style-type: none;
    padding: 24px 5%;
  }

  .list__company {
    align-self: center;
  }

  .content__logo {
    display: none;
  }

  .list__burger {
    margin-left:auto;
  }

.list__logo{
  width:10%;
  max-width:60px;
  display:block;
}

.logo__image{
  width:100%;
  display:block;
}

  .link {
    text-decoration: none;
    display:flex;
    margin-left:10%;
    &--default-colour {
      @include paragraph($blue,null);
    }

    &--big-text {
      @include paragraph(null,$headline--desktop);
    }

    &--medium {
      @include paragraph(null,$paragraph--desktop);
    }

    &__line {
      border: solid $dark-blue 1px;
    }
  }
}

@media (min-width: 765px) {

    .header__content {
      background-size:120%; //set to 120% on bigger screens
    }
}

@media (min-width: 1000px) {

    .header{
        height:100px;
        overflow-y:hidden;
    }

  .header__content{
    grid-template-columns:1fr 1fr;
    overflow:hidden;
    background-size:100%; //set to 120% on bigger screens
    background-position:150px center;
  }

  .list__burger {
    display:none;
  }

  .header__nav{
    display:grid;
    background-color:transparent;
    position:absolute;
  }

  .nav__list{
    grid-row:1;
    background-color:transparent;
    z-index:2;
  }

  .header__menu {
    padding:0;
    display:flex;
    flex-direction:row;
    height:auto;
    width:auto;
    position:static;
    grid-row:1;
    justify-content:space-evenly;
    background-color:transparent;
    width:80%;
    justify-self:end;
  }

  .item__link{
    @include paragraph($white,$menu--desktop);
    font-weight:400;
  }


  .image__wave{
    display:block!important;
    width:130%;
    max-width:1300px;
    margin-top:-68px;
    margin-left:-180px;
    grid-column:1/-1;
    grid-row:1/6;
    z-index:1;
  }

}

</style>