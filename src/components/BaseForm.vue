<script setup lang="ts">
import {authorizationRequest} from "~/src/asyncFunction";
import {schemaVeeValidate} from "~/src/formValidate";
import {ref} from "vue";
import {useVariableStore} from "~/store/variableStore";
import BaseButton from "~/src/components/BaseButton.vue";
import {Form, Field, ErrorMessage} from "vee-validate";
import TheLoader from "~/src/components/TheLoader.vue";
const variableStore = useVariableStore();

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
      :class="{'no-login': variableStore.authSend}"
  >
    <TheLoader/>
    <div
        :class="{'no-login__text': variableStore.authSend}"
        v-if="variableStore.authSend"
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
        :status="variableStore.authSend"
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

.loader {
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

.no-login {
  border: solid 1px red;

  &__text {
    color: red;
  }
}

</style>