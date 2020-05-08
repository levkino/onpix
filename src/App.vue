<template>
  <div id="app">
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Footer />
  </div>
</template>

<script>
import Block1 from './components/Block1.vue';
import Block2 from './components/Block2.vue';
import Block3 from './components/Block3.vue';
import Block4 from './components/Block4.vue';
import Block5 from './components/Block5.vue';
import Block6 from './components/Block6.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Footer
  }
};
</script>

<style>
  @font-face {
    font-family: 'Roboto';
    src: url(./assets/roboto.ttf);
  }

  #app {
    font-family: 'Roboto', Georgia, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  .header-block {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .light-block, .dark-block {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding: 50px 0;
  }

  .light-block .container, .dark-block .container {
    max-width: 1000px;
  }

  .light-block h1, .dark-block h1 {
    margin-bottom: 50px;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .dark-block {
    background: rgb(240, 240, 240);
  }

  /* .dark-block:before {
    content: '';
    height: 2px;
    width: 90%;
    border-radius: 5px;
    background: lightgray;
    margin-bottom: 100px;
  } */

  @media (max-width: 767px) {
    .col-md-3, .col-md-9 {
      display: flex;
      justify-content: center;
      text-align: center;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .light-block, .dark-block {
      padding: 50px 10px;
    }
  }
</style>
