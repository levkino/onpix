<template>
  <div id="start" class="header-block main-div animated fadeIn">
    <div class="navbar">
      <div class="menu">
        <span v-scroll-to="'#prices'">Цены</span>
        <span v-scroll-to="'#about'">Обо мне</span>
        <span v-scroll-to="'#question'">Контакты</span>
      </div>
      <div class="contacts">
        <span>
          <font-awesome-icon class="mr-1" icon="phone" title="Телефон"/>
          8 (950) 803 99 75
        </span>
        <span>
          <font-awesome-icon class="mr-2" icon="envelope" title="Почта"/>
          info@onpix.ru
        </span>
      </div>
    </div>
    <div class="header">
      <div class="right" align="right"></div>
      <p class="wow fadeInDown mt-2">лендинг</p>
      <hr class="w-75 animated fadeIn site-visit"/>
      <p class="wow fadeInUp site-visit">сайт визитка</p>
      <div class="bottom" align="right"></div>
    </div>
    <div class="sub-header">
      <p class="wow fadeInUp delay-1s">под ключ</p>
    </div>
    <div id="arrow-down" class="arrow-down wow fadeInUp delay-1s">
      <div class="wow pulse infinite">
        <font-awesome-icon icon="angle-double-down" size="3x" v-scroll-to="'#advatages'"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-div {
    background: #429ace;
    min-height: 500px;
    height: 100vh;
  }

  .navbar {
    position: absolute;
    top: 0;
    width: 100%;
    color: white;
    display: flex;
    padding: 15px 10px;
    font-size: 1.2rem;
  }

  .navbar span {
    margin: 3px 5px;
  }

  .menu span {
    cursor: pointer;
    border-radius: 5px;
    padding: 10px 15px;
  }

  .menu span:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  .contacts {
    text-align: right;
  }

  .header {
    background: rgba(128, 128, 128, 0.2);
    color: #fff;
  }

  .header hr {
    background: #fff;
    margin: 0 auto;
  }

  .header p {
    font-size: 3rem;
    font-weight: 600;
    margin: 0 30px;
    padding: 25px;
    text-transform: uppercase;
  }

  .header:before, .header:after, .right:before, .bottom:after {
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    content: '';
    border-color: #fff;
    border-style: solid;
    opacity: 0.8;
  }

  .right {
    height: 0;
  }

  .header:before {
    left: 0px;
    top: 0px;
    border-width: 5px 0 0 5px;
  }

  .header:after {
    right: 0px;
    top: 0px;
    border-width: 0 0 5px 5px;
  }

  .right:before {
    right: 0px;
    top: -18px;
    border-width: 5px 5px 0 0;
  }

  .bottom:after {
    right: 0px;
    bottom: -18px;
    border-width: 0 5px 5px 0;
  }

  .sub-header {
    font-size: 1.5rem;
    color: #fff;
  }

  .site-visit {
    animation-delay: 0.3s;
  }

  .arrow-down {
    position: absolute;
    min-height: 500px;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
    color: white;
  }

  .arrow-down svg {
    cursor: pointer;
    opacity: 0.5;
  }
  .arrow-down svg:hover {
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    .main-div {
      background: url(../assets/back1.jpg) no-repeat;
      background-size: cover;
    }
  }

  @media (max-width: 767px) {
    .main-div {
      background: url(../assets/back1_mobile.jpg) no-repeat;
      background-size: cover;
    }

    .navbar {
      justify-content: space-around;
      line-height: 35px;
      font-size: 1.1rem;
    }

    .contacts {
      margin-top: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      line-height: 1.5rem;
    }

    .header p {
      font-size: 2rem;
      font-weight: 600;
      margin: 0 20px;
      text-shadow: 1px 1px 1px rgb(0, 2, 150);
      padding: 15px;
    }

    .sub-header {
      text-shadow: 1px 1px 1px rgb(0, 2, 150);
    }

    .arrow-down {
      height: 70vh;
      margin-bottom: 0;
    }
  }
</style>
