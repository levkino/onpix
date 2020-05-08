<template>
  <div id="advatages" class="light-block">
    <b-container>
      <h1>Почему я?</h1>
      <div class="advantages" align="center">
        <b-card class="wow fadeInUp" no-body>
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img-lazy src="@/assets/slide2_1.png"/>
            </b-col>
            <b-col md="9" class="text">
              <b-card-body title="Индивидуальный подход">
                <b-card-text>
                  Сайт детально обсуждается и разрабатывается персонально под каждого.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="wow fadeInUp mt-4" no-body>
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img-lazy src="@/assets/slide2_2.png"/>
            </b-col>
            <b-col md="9" class="text">
              <b-card-body title="Поэтапная оплата">
                <b-card-text>
                  4 этапа создания сайта с оплатой по завершению каждого этапа.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="wow fadeInUp mt-4" no-body>
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img-lazy src="@/assets/slide2_3.png"/>
            </b-col>
            <b-col md="9" class="text">
              <b-card-body title="Современные технологии">
                <b-card-text>
                  В разработке используются современные платформы: Figma, Bootstrap и VueJS.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="wow fadeInUp mt-4" no-body>
          <b-row no-gutters>
            <b-col md="3">
              <b-card-img-lazy src="@/assets/slide2_4.png"/>
            </b-col>
            <b-col md="9" class="text">
              <b-card-body title="Адаптивный дизайн">
                <b-card-text>
                  Сайт прорабатывается как для компьютера, так и для телефонов.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .advantages {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: baseline;
  }

  .advantages .card {
    border: 0;
    min-width: 450px;
    max-width: 450px;
    text-align: left;
    margin-bottom: 50px;
  }

  .advantages .card-body {
    padding: 0;
  }

  .advantages img {
    width: 100px;
    height: 100px;
  }

  .advantages .text {
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  @media (max-width: 767px) {
    .advantages .card {
      min-width: 100%;
    }
  }
</style>
