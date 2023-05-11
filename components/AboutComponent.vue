<template>
  <article class="about">
      <h1 class="about__headline">Om Dahl Lolland</h1>
      <span v-if="content" class="about__paragraph" v-html="markdownParser">
      </span>
      <div class="about__image-container">
        <img src="../assets/DahlCar.png" class="image-container__image" />
      </div>

  </article>
</template>

<script>
import { fetchAbout } from '@/static/API';

export default {
  name: "AboutComponent",
  components: {

  },
  data() {
    return {
      content: ''
    };
  },
  async created () {
    if (!localStorage.getItem('about') || ((new Date() - new Date(JSON.parse(localStorage.getItem('about')).lastUpdated)) / (1000 * 60 * 60)) >= 24) {
          let response = await fetchAbout()
          .catch(err => {
              return
          })
          if (response) {
              this.content = response				
              const about = {
                content: this.content,
                lastUpdated: new Date().toString()
              }
            localStorage.setItem('about', JSON.stringify(about));
          }
      }else {
        this.content = JSON.parse(localStorage.getItem('about')).content
      }
  },

  computed: {
    markdownParser () {
    const toHTML = this.content.description
      .replace(/^###### (.*)(?=\n|$)/gim, '<h6>$1</6>') // h3 tag
      .replace(/^##### (.*)(?=\n|$)/gim, '<h5>$1</h5>') // h3 tag
      .replace(/^#### (.*)(?=\n|$)/gim, '<h4>$1</h4>') // h3 tag
      .replace(/^### (.*)(?=\n|$)/gim, '<h3>$1</h3>') // h3 tag
      .replace(/^## (.*)(?=\n|$)/gim, '<h2>$1</h2>') // h2 tag
      .replace(/^# (.*)(?=\n|$)/gim, '<h1>$1</h1>') // h1 tag
      .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>') // bold text
      .replace(/\*(.*)\*/gim, '<i>$1</i>') // italic text
      .replace(/~~(.*?)~~/g, '<s>$1</s>') // strike through text 
      .replace(/^(?!<h[1-6]>|<b>|<i>|<s>|<br>)(.+)$/gim, '<p>$1</p>') // wrap remaining text in <p> tag
      return toHTML.trim(); // using trim method to remove whitespace
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/scss/assets/_collections";
.about {
  overflow-x: hidden;
  display: grid;
  &__headline {
    @include headline($blue,$headline);
    text-align: left;
    padding: 0 5%;
    margin: 77px 0 32px 0;
  }
  &__paragraph {
    @include paragraph(null, $paragraph);
    text-align: left;
    padding: 0 5%;
    margin-bottom: 32px;

   ::v-deep h1 {
      @include headline;
    }
   ::v-deep h2 {
      @include headline($blue, $headline-2);
    }
    ::v-deep h3 {
      @include headline($blue, $headline-3);
    }
    ::v-deep h4 {
      @include headline($blue, $headline-4);
    }
    ::v-deep h5 {
      @include headline($blue, $headline-5);
    }
    ::v-deep h6 {
      @include headline($blue, $headline-6);
    }
    ::v-deep {
      @include paragraph;
    }
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
      @include headline(null, $headline--desktop);
      grid-column: 1/2;
      padding: 0 10%;
    }
    &__paragraph {
      @include paragraph(null, $paragraph--desktop);
      padding: 0 10%;
      grid-column: 1/2;
      width:100%;
    
      ::v-deep h1 {
          @include headline($blue, $headline--desktop);
        }
      ::v-deep h2 {
          @include headline($blue, $headline-2--desktop);
        }
        ::v-deep h3 {
          @include headline($blue, $headline-3--desktop);
        }
        ::v-deep h4 {
          @include headline($blue, $headline-4--desktop);
        }
        ::v-deep h5 {
          @include headline($blue, $headline-5--desktop);
        }
        ::v-deep h6 {
          @include headline($blue, $headline-6--desktop);
        }

        ::v-deep {
          @include paragraph(null, $paragraph--desktop);
        }
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

    &__paragraph {
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