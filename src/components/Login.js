import React from 'react';
import AuthForm from './AuthForm';

function Login() {
  return (
    <section className="login">
      <AuthForm title="Вход" button="Войти" />
    </section>
  );
}

export default Login;
