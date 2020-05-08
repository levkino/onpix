<template>
  <div id="question" class="light-block">
    <b-container>
      <h1>Задать вопрос</h1>
      <div class="question wow fadeInUp">
        <div class="block">
          <div class="icon">
            <a href="tg://resolve?domain=levkino"><b-img-lazy src="@/assets/slide6_1.png"/></a>
          </div>
          <div class="title">Telegram</div>
        </div>
        <div class="block">
          <div class="icon">
            <a href="https://vk.com/levkino" target='_blank'><b-img-lazy src="@/assets/slide6_2.png"/></a>
          </div>
          <div class="title">VK</div>
        </div>
        <!-- <div class="block">
          <div class="icon">
            <a href="viber://add?number=79508039975"><b-img-lazy src="@/assets/slide6_3.png"/></a>
          </div>
          <div class="title">Viber</div>
        </div> -->
      </div>
    </b-container>
  </div>
</template>

<style scoped>
  .question {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .block {
    margin: 0 30px 30px 30px;
  }

  .icon img {
    height: 160px;
    width: 160px;
    cursor: pointer;
  }

  .title {
    font-size: 1.2rem;
    margin: 5px 0;
  }
</style>
