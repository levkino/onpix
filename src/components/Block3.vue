<template>
  <div id="prices" class="dark-block">
    <b-container>
      <h1>Цены</h1>
      <div class="price wow fadeInUp">
        <b-card>
          <b-card-header>
            <b-card-img-lazy src="@/assets/slide3_1.png"/>
            <div>Лендинг</div>
          </b-card-header>
          <b-card-body>
            <div class="header">
              <span class="title">от</span>
              <span class="main">30 000</span>
              <span class="sub">руб.</span>
            </div>
            <div class="desc">
              <div class="add">+ хостинг 3 000 руб./год</div>
              <div class="add">домен в подарок</div>
              <hr class="w-25"/>
              <div class="add">срок разработки - неделя</div>
            </div>
          </b-card-body>
          <b-button variant="primary" @click="$parent.showApplic()">Оставить заявку</b-button>
        </b-card>
        <b-card>
          <b-card-header>
            <b-card-img-lazy src="@/assets/slide3_2.png"/>
            <div>Сайт визитка</div>
          </b-card-header>
          <b-card-body>
            <div class="header">
              <span class="title">от</span>
              <span class="main">50 000</span>
              <span class="sub">руб.</span>
            </div>
            <div class="desc">
              <div class="add">+ хостинг 3 000 руб./год</div>
              <div class="add">домен в подарок</div>
              <hr class="w-25"/>
              <div class="add">срок разработки - неделя</div>
            </div>
          </b-card-body>
          <b-button variant="primary" @click="$parent.showApplic()">Оставить заявку</b-button>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .card {
    max-width: 350px;
    margin: 0 50px;
  }

  .card-body {
    padding: 0 0 30px 0;
  }

  .card-header {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
  }

  .card-header img {
    border-radius: 5px 5px 0 0;
  }

  .card-header div {
    font-size: 2.0rem;
    height: 80px;
    margin-top: 10px;
  }

  .price {
    display: flex;
    justify-content: center;
  }

  .price .header {
    font-size: 1.5rem;
    line-height: 3rem;
  }

  .price .main {
    font-size: 2.5rem;
    color: green;
    margin: 0 5px;
  }

  .desc hr {
    margin: 15px auto;
  }

  @media (max-width: 767px) {
    .price {
      flex-wrap: wrap;
    }

    .card {
      width: 100%;
      max-width: none;
      margin: 0 10px 30px 10px;
    }
  }
</style>
