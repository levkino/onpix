<template>
  <div id="about" class="dark-block">
    <a href="#about"/>
    <b-container>
      <h1>Обо мне</h1>
      <div class="about wow fadeInUp">
        <b-img-lazy class="foto" src="@/assets/slide5_1.jpg" rounded="circle"/>
        <p>
          Меня зовут Лев. Я закончил кафедру инженерной кибернетики в НИТУ МИСиС.
          Занимюсь разработкой десктопных приложений и веб-сайтов более 10 лет.
        </p>
        <h3 class="mt-5 mb-4">Примеры моих работ</h3>
        <b-carousel controls indicators :interval="4000" img-width="1024" img-height="529">
          <b-carousel-slide caption="www.dance-soft.ru">
            <template v-slot:img>
              <b-img-lazy class="d-block img-fluid w-100" src="@/assets/slide5_2.jpg"/>
            </template>
          </b-carousel-slide>
          <b-carousel-slide caption="www.fitness-soft.ru">
            <template v-slot:img>
              <b-img-lazy class="d-block img-fluid w-100" src="@/assets/slide5_3.jpg"/>
            </template>
          </b-carousel-slide>
        </b-carousel>
        <p class="mt-5">
          Оставьте заявку и я свяжусь с Вами в ближайшее время.
        </p>
        <b-button variant="primary" @click="$parent.showApplic()">Оставить заявку</b-button>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  p {
    font-size: 1.4rem;
    text-align: justify;
    text-indent: 50px;
  }

  .about {
    max-width: 700px;
    margin: 0 auto;
  }

  .foto {
    width: 150px;
    height: 150px;
    margin-bottom: 50px;
  }
</style>
