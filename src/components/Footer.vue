<template>
  <div class="dark-block p-2">
    <div class="navbar animated fadeIn">
      <div class="menu">
        <span v-scroll-to="'#prices'">Цены</span>
        <span v-scroll-to="'#about'">Обо мне</span>
        <span v-scroll-to="'#start'">В начало</span>
      </div>
      <div class="contacts">
        <span>
          <font-awesome-icon class="mr-1" icon="phone" title="Телефон"/>
          8 (950) 803 99 75
        </span>
        <span>
          <font-awesome-icon class="mr-2" icon="envelope" title="Почта"/>
          levkino@yandex.ru
        </span>
      </div>
      <div class="copyright">
        Copyright © Ованоглян Л.О.  2020
      </div>
    </div>
  </div>
</template>

<style scoped>
  .navbar {
    flex-direction: column;
    display: flex;
    padding: 15px 10px;
    color: white;
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
    margin: 20px 0;
  }

  @media (min-width: 800px) {
    .dark-block {
      background: url(../assets/back1.jpg) no-repeat;
      background-size: cover;
    }
  }

  @media (max-width: 767px) {
    .dark-block {
      background: url(../assets/back1_mobile.jpg) no-repeat;
      background-size: cover;
    }
    .navbar {
      justify-content: space-around;
      line-height: 1.0rem;
      font-size: 1.1rem;
    }

    .contacts {
      text-align: center;
      display: flex;
      flex-direction: column;
      line-height: 1.4rem;
    }
  }
</style>
