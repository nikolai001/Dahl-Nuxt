<template>
  <article class="contact-map">
    <form class="contact-map__form">
      <p class="contact-map__headline">Kontakt formular</p>
      <input class="form__field" type="text" placeholder="Dit navn" />
      <input class="form__field" type="text" placeholder="Din e-mail" />
      <input class="form__field" type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="Dit telefon nr" />
      <textarea class="form__field" type="text" placeholder="Din forespørgelse" />
      <button type="button" class="form__button form__button--cancel">Ryd formular</button>
      <button type="button" class="form__button form__button--submit">Send</button>
    </form>
    <iframe class="contact-map__map" src="https://snazzymaps.com/embed/475725"></iframe>
  </article>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @import "./assets/scss/assets/_collections";

  .contact-map {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto 30px auto;
    box-shadow: $el-1;
    border-radius: $primary-border;
    overflow: hidden;
    
    &__map {
      width: 100%;
      aspect-ratio: 1/1;
      border: none;

    }
    &__headline {
      text-align: center;
    }
    &__form {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      .form__button {
        cursor: pointer;
        &--submit {
          background-color: $cta-blue;
          border-radius: $rounded-border;
          color: $white;
          text-align: center;
          width: 40%;
          max-width: 120px;
          padding: 8px 2px;
          border: none;
          margin: 0 auto;
          margin-top: 10px;
        }
        &--cancel {
          background-color: transparent;
          color: $inactive;
          border: none;
          width: fit-content;
          margin: 0 auto;
        }
      }

      .form__field {
        border-radius: $secondary-border;
        padding: 10px 0;
        border: solid 1px $border;
        outline: none;
        text-indent: 8px;
        resize: vertical;
        min-height: 38px;
        box-sizing: border-box;
        width: 90%;
        margin: 10px auto;
        overflow: hidden;
        background-color: $background-white;
        &:focus {
          border: solid 1px $blue;
          color: $blue;
        }
      }
    }
  }
</style>