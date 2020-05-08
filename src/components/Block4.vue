<template>
  <div class="light-block">
    <b-container>
      <h1>Этапы создания сайта</h1>
      <div class="creation">
        <div class="stage wow flipInX">
          <div class="round">1</div>
          <div class="block">
            <div class="text">Обсуждение</div>
            <div class="sub">Бесплатно</div>
          </div>
        </div>
        <div class="stage wow flipInX">
          <div class="round">2</div>
          <div class="block">
            <div class="text">Создание макета</div>
            <div class="sub">30% оплаты</div>
          </div>
        </div>
        <div class="stage wow flipInX">
          <div class="round">3</div>
          <div class="block">
            <div class="text">Разработка сайта</div>
            <div class="sub">50% оплаты</div>
          </div>
        </div>
        <div class="stage wow flipInX">
          <div class="round last" style="padding-left: 0">4</div>
          <div class="block">
            <div class="text">Корректировка сайта</div>
            <div class="sub">20% оплаты</div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .stage {
    display: flex;
    margin: 0 auto;
    max-width: 350px;
  }

  .round {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: 3px #629cd2 solid;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding-left: 3px;
    font-size: 1.3rem;
  }

  .round:after {
    content: '';
    height: 42px;
    width: 3px;
    background: #629cd2;
    position: relative;
    bottom: -45px;
    left: -6px;
  }

  .last:after {
    display: none;
  }

  .block {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    margin-left: 5px;
  }

  .text {
    font-size: 1.5rem;
  }

  .sub {
    font-size: 1.2rem;
    color: gray;
  }
</style>
