<template>
  <div id="about" class="dark-block">
    <b-container>
      <h1>Обо мне</h1>
      <div class="about wow fadeInUp">
        <p>
          Меня зовут Лев. Закончил кафедру инженерной кибернетики НИТУ МИСиС.
          Занимюсь разработкой десктопных приложений и веб-сайтов более 10 лет.
          Участвовал в следующих проектах:
        </p>
        <div class="images">
          <b-img-lazy src="@/assets/slide5_1.png"/>
          <b-img-lazy src="@/assets/slide5_2.png"/>
          <b-img-lazy src="@/assets/slide5_3.png"/>
        </div>
        <p class="mt-4">
          Готов взяться за Ваш проект, сделать красивый и качественный сайт с хорошей конверсией.
        </p>
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

  .images {
    background: white;
    border: 1px lightgray solid;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>
