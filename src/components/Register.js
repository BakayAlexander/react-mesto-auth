import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';

function Register() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // Используем useHistory для перехода после регистрации
  const history = useHistory();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(email, password).then((res) => {
      //400 это код ошибки, если его нет, то переходим на страницу авторизации
      if (res.statusCode !== 400) {
        history.push('/sign-in');
      }
    });
  }

  return (
    <section className="register">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__inputs">
          <input
            className="auth__input"
            // id=""
            // name="link"
            type="email"
            placeholder="Email"
            required
            value={email ?? ''}
            onChange={handleChangeEmail}
          />
          <input
            className="auth__input"
            // id=""
            // name="link"
            type="password"
            placeholder="Пароль"
            required
            value={password ?? ''}
            onChange={handleChangePassword}
          />
        </fieldset>
        <button className="auth__button" type="submit">
          {/* {!isSubmitting ? 'Зарегистрироваться' : <BouncingLoader />} */}
          Зарегистрироваться
        </button>
      </form>
      <Link className="register__link" to="/sign-in">
        Уже зарегистрированы? Войти
      </Link>
    </section>
  );
}

export default Register;
