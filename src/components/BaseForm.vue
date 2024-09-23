<script setup lang="ts">
import {authorizationRequest} from "~/src/userAuthorizationRequest";
import {schemaVeeValidate} from "~/src/formValidate";
import {ref} from "vue";
import BaseButton from "~/src/components/BaseButton.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import TheLoader from "~/src/components/TheLoader.vue";
import {useUserStore} from "~/store/UserStore";

const userStore = useUserStore();

const
    login = ref(""),
    password = ref(""),
    email = ref("");

</script>

<template>
  <Form
      class="form"
      @submit="authorizationRequest(login,email,password)"
      :validation-schema="schemaVeeValidate"
      v-slot="{ errors }"
      :class="{'no-login': userStore.authSend}"
  >
    <TheLoader/>
    <div
        :class="{'no-login__text': userStore.authSend}"
        v-if="userStore.authSend"
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
      <ErrorMessage class="form__error-message" name="login"/>
    </label>
    <label class="form__item" :class="{'form__error': errors.email}">
      <span>Email</span>
      <Field
          name="email"
          type="text"
          placeholder="Email"
          v-model='email'
      />
      <ErrorMessage class="form__error-message" name="email"/>
    </label>
    <label class="form__item" :class="{'form__error': errors.password}">
      <span>Пароль</span>
      <Field
          name="password"
          type="password"
          placeholder="Пароль"
          v-model='password'
      />
      <ErrorMessage class="form__error-message" name="password"/>
    </label>
    <BaseButton
        type="submit"
        :status="userStore.authSend"
    >
      Авторизоваться
    </BaseButton>
  </Form>
</template>

<style scoped lang="scss">
.form {
  border-radius: 10px;
  border: solid 2px gray;
  padding: 10px;
  width: 400px;
  margin: auto;
  position: relative;

  &__item {
    display: block;
    margin-bottom: 20px;

    span {
      display: block;
      font-size: 14px;
      margin: 0 0 5px 0;
    }

    input {
      padding: 5px;
      font-size: 16px;
      width: 100%;
      border: solid 1px #000;
    }
  }

  &__error {
    input {
      border: solid 1px red;
    }

    &-message {
      color: red;
    }
  }
}

.no-login {
  border: solid 1px red;

  &__text {
    color: red;
  }
}

</style>