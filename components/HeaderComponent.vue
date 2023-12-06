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
      <h1 class="content__headline">Autoriseret el-installatør</h1>
      <p class="content__paragraph">
        <b>Dahl Lolland Aps</b> Nakskovs bedste el virksomhed med byens bedste elektrikere, ingen opgave er for lille eller for stor. <br> <b>Ring til Dahl vi er lokal</b>
      </p>

      <button class="content__contact" @click="ContactOpen = true">
        Kontakt os i dag
      </button>

      <div :class="{ content__margin:!ContactOpen }" class="content__logo">
        <button v-if="!ContactOpen" class="logo__cta"></button>
      </div>
      <ContactformComponent :class="{noDisplay:ContactOpen}" class="content__contact-form" :closeButton="true" @close="ContactOpen = false" />
    </div>
  </header>
</template>

<script>
import ContactformComponent from './ContactformComponent.vue';
export default {
  name: "HeaderComponent",

  components: {
		ContactformComponent,
	},

  data() {
    return {
      ContactOpen: false,
      MenuToggled: false,
    };
  },  
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
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    padding-top: 68px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto 2fr;
    width:100%;
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

.noDisplay{
  display: flex !important;
}

.menu__item {
  margin: 15px 0;
}

.item__link {
  @include paragraph($cta-blue,$menu);
  text-decoration: none;
  font-weight: 500;
}

  .content__margin {
    margin-top: 117px;
  } 

.nav__list {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 24px 5%;
  margin: 0;
}

.content {
  &__headline {
    @include headline($white, $headline);
    text-align: center;
    margin-bottom: 34px;
    padding: 0 5%;
  }

  &__paragraph {
    @include paragraph($white, $paragraph);
    text-align: center;
    padding: 0 5%;
  }

  &__contact {
    width: 38%;
    justify-self: center;
    border-radius: 10em;
    border: none;
    background-color: $white;
    @include paragraph($blue,$contact);
    padding: 11px 15px;
    grid-row: 4;
    grid-column: 1/-1;
    margin-top: 34px;
    cursor:pointer;
    &-form {
        background-color: $white;
        height: fit-content;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        margin: auto auto 0 auto;
        width:95%;
        border-radius:$secondary-border $secondary-border 0 0;
        display:none;
        padding: 0 0 20px 0;
        box-shadow: $el-1--invert;
    }
  }
}

.list__company {
  align-self: center;
}

.content__logo {
  width: 100%;
  display: flex;
  justify-content: center;
  grid-row: 5;
  grid-column: 1/-1;
  z-index: 1;
}

.list__logo{
  display: none;
}

.logo__cta {
  background-image: url("../assets/cta_logo.svg");
  background-color: transparent;
  background-size: 100% 100%;
  border: none;
  outline: none;
  width: 10.6vw;
  height: 10.6vw;
  position:relative;
  top:20px;
}

.list__burger {
  display: flex;
}

.burger__button {
  background-color: transparent;
  border: none;
  outline: none;
}
:focus {
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
      background-size: cover; //set to 120% on bigger screens
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

  .content__margin {
    margin-top: 117px;
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

  .content {
    &__headline {
      @include headline($white,$headline--desktop);
      text-align: center;
      margin-bottom: 34px;
      padding: 0 5%;
    }

    &__paragraph {
      @include paragraph($white,$paragraph--desktop);
      padding: 0 5%;
    }

    &__contact {
      width: 25%;
      justify-self: center;
      padding: 11px 15px;
      grid-row: 4;
      grid-column: 1/-1;
      @include paragraph(null, $paragraph--desktop);
      margin-top: 34px;
      max-width:150px;
      margin-bottom:117px;
      &-form {
        width: 75%;
        max-width: 600px;
      }
    }
  }

  .list__company {
    align-self: center;
  }

  .content__logo {
    display: none;
  }

  .logo__cta {
    display:none;
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

  .header__content{
    grid-template-columns:1fr 1fr;
    overflow:hidden;
    background-size:130%;
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
    @include paragraph($white, $paragraph--desktop);
    font-weight:400;
  }

  .header__content{
    height:500px;
    grid-column:1/-1;
  }

  .content__contact{
    height:50px;
    border-radius:unset;
    position:absolute;
    top:490px;
    left:60%;
    width: 279px;
    max-width:unset;
    border-radius:0.5em 0.5em 0 0;
    z-index: 2;
  }

  .content__headline{
    grid-column:1/2;
    grid-row:1;
    align-self:end;
    text-align:left;
    z-index:2;
    margin-top:120px;
    @include headline($blue,$headline--desktop);
    max-width:400px;
  }

    .content__paragraph{
    grid-column:1/2;
    grid-row:2;
    text-align:left;
    z-index:2;
    @include paragraph($blue, $paragraph--desktop);
    max-width:400px;
  }

  .content__contact-form {
      display: none;
      width:35%;
      max-width:449px;
      left:55%;
      position:absolute;
      margin: 95px 0 0 0;
      top: 0px;
      bottom: 0;
      padding-top:10px;
      border-radius:0.5em 0.5em 0 0;
      z-index: 4;
  }

  .contact-form__paragraph{
    @include paragraph(null, $headline--desktop);
  }

  .contact-form__close{
    display:none;
  }

  .contact-form__submit {
    width: 100%;
    padding: 6px;
  }

  .content__margin {
    margin-top: 0;
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