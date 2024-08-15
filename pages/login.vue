

<template>
  <div class="pageContainer">
    <h1>Авторизация</h1>
    <Form
        class="form"
        @submit="loginStore.sendAuth(login,email,password)"
        :validation-schema="schemaVeeTest"
        v-slot="{ errors }"
        :class="{'no-login': loginStore.authSend}"
    >
      <div class="loader" v-if="loginStore.loader"></div>
      <div
          :class="{'no-login__text': loginStore.authSend}"
          v-if="loginStore.authSend"
      >
        Авторизация не прошла Проверьте данные
      </div>
      <label class="form__item" :class="{'form__error': errors.login}">
        <span>Логин</span>
        <Field
            name="login"
            type="text"
            placeholder="Логин"
            v-model='login'
        />
        <ErrorMessage class="form__error-message" name="login" />
      </label>
      <label class="form__item" :class="{'form__error': errors.email}">
        <span>Email</span>
        <Field
            name="email"
            type="text"
            placeholder="Email"
            v-model='email'
        />
        <ErrorMessage class="form__error-message" name="email" />
      </label>
      <label class="form__item" :class="{'form__error': errors.password}">
        <span>Пароль</span>
        <Field
            name="password"
            type="password"
            placeholder="Пароль"
            v-model='password'
        />
        <ErrorMessage class="form__error-message" name="password" />
      </label>
      <button class="btn">
        Авторизоваться
      </button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { Form, Field, ErrorMessage } from 'vee-validate';
import {definePageMeta} from "#imports";
import { useLoginStore } from "~/store/loginStore";
import * as yup from 'yup';

const login = ref("");
const password = ref("");
const email = ref("");
const loginStore = useLoginStore();
const schemaVeeTest = yup.object({
  login: yup.string().required('Напишите свой логин'),
  password: yup.string().required('Пароль обязателен'),
  email: yup.string().email('Email не корректный')
});


definePageMeta({
  middleware: "protected-auth-form"
})

</script>

<style scoped lang="scss">
.form{
  border-radius: 10px;
  border: solid 2px gray;
  padding: 10px;
  width: 400px;
  margin: auto;
  position: relative;
  &__item{
    display: block;
    margin-bottom: 20px;
    span{
      display: block;
      font-size: 14px;
      margin: 0 0 5px 0;
    }
    input{
      padding: 5px;
      font-size: 16px;
      width: 100%;
    }
  }
  button{
    margin-top: 0;
    background: #fff;
    cursor: pointer;
    border-radius: 5px;
    &:hover{
      background: #e9e9e9;
    }
  }
  &__error{
    input{
      border:solid 1px red;
    }
    &-message{
      color: red;
    }
  }
}
.loader{
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 200px;
  z-index: 0;
  background: url("~/assets/images/loader.gif") no-repeat center;
  height: 28px;
  background-size: 100%;
  margin: auto;
}
.no-login{
  border: solid 1px red;
  &__text{
    color: red;
  }
}

</style>