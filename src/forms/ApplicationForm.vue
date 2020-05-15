<template>
  <div>
    <b-modal id="application-modal" hide-footer title="Заявка на сайт" size="sm">
      <div class="form text-center" v-focus-first v-focusNextOnEnter>
        <b-form-group label="Имя и фамилия:"
                      :invalid-feedback="nameInvalidText"
                      :state="nameState">
          <b-form-input v-model.trim="name" :state="nameState" placeholder="Имя и фамилия" autofocus/>
        </b-form-group>
        <b-form-group label="Телефон:"
                      :invalid-feedback="phoneInvalidText"
                      :state="phoneState">
          <b-form-input v-model.number="phone" :state="phoneState" placeholder="8 (000) 000 00 00"/>
        </b-form-group>
        <b-form-group label="Электронная почта:"
                      :invalid-feedback="emailInvalidText"
                      :state="emailState">
          <b-form-input v-model.trim="email" :state="emailState" placeholder="info@mail.ru"/>
        </b-form-group>
      </div>
      <div class="buttons text-center mt-4 mb-2">
        <b-button variant="success" @click="submit">
          Подать заявку
          <b-spinner v-if="loading" class="ml-1" small></b-spinner>
        </b-button>
        <b-alert class="m-3" v-model="error" variant="danger">
          Заполните все поля
        </b-alert>
      </div>
    </b-modal>

    <b-modal id="res-modal" hide-footer title="Заявка на сайт" size="sm">
      <div class="text-center">
        {{ result }}
      </div>
      <div class="buttons text-center mt-4 mb-2">
        <b-button variant="outline-secondary" @click="$bvModal.hide('res-modal')">ОК</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'ApplicationForm',
  props: {
    show: Boolean
  },
  data() {
    return {
      name: null,
      phone: null,
      email: null,
      error: false,
      loading: false,
      result: null
    };
  },
  computed: {
    nameState() {
      return this.name === null ? null : this.name.length >= 3;
    },
    nameInvalidText() {
      return this.state ? null : 'Укажите имя и фамилию';
    },
    phoneState() {
      return this.phone === null ? null : this.phone >= 999999999;
    },
    phoneInvalidText() {
      return this.state ? null : 'Укажите телефон';
    },
    emailState() {
      return this.email === null ? null : (this.email.includes('@') && this.email.includes('.'));
    },
    emailInvalidText() {
      return this.state ? null : 'Укажите электронную почту';
    }
  },
  watch: {
    show() {
      this.$bvModal.show('application-modal');
    }
  },
  methods: {
    submit() {
      if (this.loading) {
        return;
      }
      if (!this.nameState || !this.phoneState || !this.emailState) {
        this.error = true;
        return;
      }
      this.error = false;
      this.send();
    },
    send() {
      this.loading = true;
      const data = {
        recipient: 'levkino@yandex.ru',
        title: 'Форма обратной связи',
        fields: {
          Имя: this.name,
          Телефон: this.phone,
          Email: this.email
        }
      };
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://onpix.ru/back/mail/');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onreadystatechange = () => {
        this.loading = false;
        if (xhr.readyState !== XMLHttpRequest.DONE) {
          return;
        }
        if (xhr.status === 200) {
          this.$bvModal.hide('application-modal');
          this.result = 'Заявка успешно подана. Я свяжусь с Вами в ближайшее время. Спасибо.';
          // eslint-disable-next-line no-undef
          ym(62680837, 'reachGoal', 'applicSend');
        } else {
          this.result = `Ошибка отправки${xhr.response}`;
        }
        this.$bvModal.show('res-modal');
      };
      xhr.send(JSON.stringify(data));
    }
  }
};
</script>
