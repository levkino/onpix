<template>
  <div id="app">
    <Block1 />
    <Block2 />
    <Block3 />
    <Block4 />
    <Block5 />
    <Block6 />
    <Footer />
    <ApplicationForm :show="applicForm"/>
  </div>
</template>

<script>
import ApplicationForm from '@/forms/ApplicationForm.vue';
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
    ApplicationForm,
    Block1,
    Block2,
    Block3,
    Block4,
    Block5,
    Block6,
    Footer
  },
  data() {
    return {
      applicForm: false
    };
  },
  methods: {
    showApplic() {
      this.applicForm = !this.applicForm;
    }
  }
};
</script>

<style>
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(./assets/roboto.woff2);
    font-display: swap;
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

  .carousel-caption {
    width: 100%;
    height: 85px !important;
    bottom: 0 !important;
    right: 0 !important;
    left: 0 !important;
    background: rgba(0, 0, 0, 0.3);
    padding-top: 10px !important;
    text-shadow: 1px 1px 2px #333;
  }

  .btn {
    min-height: 30px;
    min-width: 120px;
  }

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
