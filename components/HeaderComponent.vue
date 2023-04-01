<template>
  <header class="header">
    <nav :class="{ 'header__nav--displayed':MenuToggled }" class="header__nav">
      <ul class="nav__list">
        <li class="list__logo">
          <router-link to="/">
          <img src="@/assets/logo.svg" alt="Dahl logo" class="logo__image">
          </router-link>
        </li>
        <li class="list__company">
          <router-link to="/" class="link">
            <span class="link--black link--default-colour link--big-text"
              >DAHL</span
            >
            <span class="link--medium">
              <hr class="link__line link__darken" />
              <span class="link--lighten">ELFIRMA</span>
              <span class="link--darken">NAKSKOV</span></span
            >
          </router-link>
        </li>
        <li class="list__burger">
          <button class="burger__button" @click="MenuToggled = !MenuToggled">
            <img class="button__icon" src="@/assets/burger.svg" />
          </button>
        </li>
      </ul>
      <menu :class="{displayMenu:MenuToggled}" class="header__menu">
        <li class="menu__item">
          <router-link to="/" class="item__link">HJEM</router-link>
        </li>
        <li class="menu__item">
          <router-link to="#" class="item__link">SERVICES</router-link>
        </li>
        <li class="menu__item">
          <router-link to="About" class="item__link">OM OS</router-link>
        </li>
        <li class="menu__item">
          <router-link to="Galleries" class="item__link">GALLERI</router-link>
        </li>
        <li class="menu__item">
          <router-link to="Contact" class="item__link">KONTAKT</router-link>
        </li>
      </menu>
    </nav>
    <div class="header__content">
      <img src="@/assets/Wave.svg" class="image__wave" draggable="false">
      <h1 class="content__headline">Autoriseret el-installatør</h1>
      <p class="content__paragraph">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore.
      </p>

      <button class="content__contact" @click="ContactOpen = true">
        Kontakt os i dag
      </button>

      <div :class="{ content__margin:!ContactOpen }" class="content__logo">
        <button v-if="!ContactOpen" class="logo__cta"></button>
      </div>

      <form
        action=""
        method="post"
        :class="{displayContact:ContactOpen}"
        class="content__contact-form"
      >
        <button
          type="button"
          class="contact-form__close"
          @click="ContactOpen = false"
        >
          X
        </button>
        <p class="contact-form__paragraph" @click="ContactOpen = false">Kontakt os I dag</p>
        <input
          type="text"
          placeholder="Dit navn..."
          class="contact-form__input contact-form__input--name"
        />
        <input
          type="text"
          placeholder="E-mail..."
          class="contact-form__input contact-form__input--mail"
        />
        <textarea
          name=""
          id=""
          rows="5"
          placeholder="Skriv en besked..."
          class="contact-form__message"
        ></textarea>
        <button type="submit" class="contact-form__submit">SEND</button>
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
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

.displayContact{
  display: grid !important;
}

.menu__item {
  margin: 15px 0;
}

.item__link {
  font-size: 5vw;
  text-decoration: none;
  color: $cta-blue;
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
    @include headline($white, null);
    text-align: center;
    margin-bottom: 34px;
    padding: 0 5%;
  }

  &__paragraph {
    @include paragraph($white, null);
    text-align: center;
    padding: 0 5%;
  }

  &__service {
    color: #fff;
    text-decoration: none;
    border: solid $white 1px;
    padding: 4px 17px;
    justify-self: center;
    margin: 42px 0 85px 0;
    font-size: 4.27vw;
  }

  &__contact {
    width: 38%;
    justify-self: center;
    border-radius: 10em;
    border: none;
    background-color: $white;
    color: $blue;
    padding: 11px 15px;
    grid-row: 4;
    grid-column: 1/-1;
    font-size: 3.7vw;
    margin-top: 34px;
    cursor:pointer;
    &-form {
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      padding: 10% 5%;
      gap: 6% 4%;
      background-color: $white;
      grid-row: 4/6;
      margin-top: 34px;
      grid-column: 1/-1;
      z-index: 2;
      display:none;
    }
  }
}

.contact-form {
  &__input {
    width: 100%;
    border-color: $border-blue;
    color: $blue;
    padding: 10px 0;
    text-indent: 10px;
    font-size: 4vw;
    box-sizing: border-box;
  }

  &__input:focus {
    border: 2px solid $border-blue;
  }

  &--name {
    grid-column: 1/2;
  }
  &--mail {
    grid-column: 2/3;
  }
  &__message {
    grid-column: 1/-1;
    width: 100%;
    border-color: $border-blue;
    color: $blue;
    resize: none;
    text-indent: 10px;
    font-size: 4vw;
    padding: 10px 0;
    box-sizing: border-box;
  }

  &__message:focus {
    border: 2px solid $border-blue;
  }

  &__paragraph {
    color: $blue;
    text-align: center;
    font-size: 4.27vw;
    grid-column: 1/-1;
    cursor:pointer;
  }

  &__submit {
    width: 100%;
    grid-column: 1/-1;
    background-color: $cta-blue;
    color: $white;
    padding: 12px;
    outline: none;
    border: none;
    font-size: 4vw;
  }

  &__close {
    background-color: transparent;
    outline: none;
    border: none;
    grid-column: 2/3;
    justify-self: end;
    font-weight: 700;
    font-size: 5vw;
    margin-right: 10%;
    margin: -15% 0;
    background-color: $cta-blue;
    color: $white;
    width: 8vw;
    height: 8vw;
    border-radius: 5em;
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
  font-size: 4vw;
  display: grid;
  grid-template-columns: 0.44fr 1fr;
  &--default-colour {
    color: $blue;
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
  }

  &--medium {
    font-weight: 500;
    grid-column: 2/3;
    grid-row: 1;
    display: flex;
    align-items: center;
  }

  &--lighten {
    color: $light-grey;
    margin-right: 4px;
  }

  &--darken {
    color: $dark-blue;
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
    font-size: 20px;
    text-decoration: none;
    color: $cta-blue;
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
      font-size: 14px;
      margin-top: 34px;
      max-width:150px;
      margin-bottom:117px;
      &-form {
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        padding: 10% 5%;
        gap: 6% 4%;
        background-color: $white;
        grid-row: 4/6;
        margin-top: 34px;
        grid-column: 1/-1;
        z-index: 2;
      }
    }
  }

  .contact-form {
    
    &__input {
      width: 58%;
      border-color: $border-blue;
      color: $blue;
      padding: 10px 0;
      text-indent: 10px;
      font-size: 14px;
    }

    &__input:focus {
      border: 2px solid $border-blue;
    }

    &__input--name {
      grid-column: 1/2;
      justify-self:end;
    }
    &__input--mail {
      grid-column: 2/3;
      justify-self:start;
    }
    &__message {
      grid-column: 1/-1;
      width: 60%;
      border-color: $border-blue;
      color: $blue;
      resize: none;
      text-indent: 10px;
      font-size: 14px;
      padding: 10px 0;
      box-sizing: border-box;
    }

    &__message:focus {
      border: 2px solid $border-blue;
    }

    &__paragraph {
      color: $blue;
      text-align: center;
      font-size: 4.27vw;
      grid-column: 1/-1;
    }

    &__submit {
      width: 60%;
      grid-column: 1/-1;
      background-color: $cta-blue;
      color: $white;
      padding: 12px;
      outline: none;
      border: none;
      font-size: 18px;
    }

    &__close {
      font-size: 18px;
      margin-right: 10%;
      margin: -15% 0;
      background-color: $cta-blue;
      color: $white;
      width: 35px;
      height: 35px;
      border-radius: 5em;
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
    &--default-colour {
      color: $blue;
    }

    &--big-text {
      font-size: 25px;
    }

    &--medium {
      font-size: 14px;
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
    background-size:130%; //set to 120% on bigger screens
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
    font-size:14px;
    color:$white;
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
      width:25%;
      max-width:449px;
      left:55%;
      position:absolute;
      top:190px;
      padding-top:10px;
      padding-bottom:10%;
      border-radius:0.5em 0.5em 0 0;
  }

  .contact-form__input{
    width:100%
  }
  
  .contact-form__message{
    width:100%;
  }

  .contact-form__paragraph{
    font-size:25px;
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