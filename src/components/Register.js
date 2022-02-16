import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register() {
  return (
    <section className="register">
      <AuthForm title="Регистрация" button="Зарегистрироваться" />
      <Link className="register__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
