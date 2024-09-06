import * as yup from "yup";

export const schemaVeeValidate = yup.object({
    login: yup.string().required('Напишите свой логин'),
    password: yup.string().required('Пароль обязателен'),
    email: yup.string().email('Email не корректный')
});