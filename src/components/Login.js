import React from 'react';
import * as auth from '../utils/auth';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth
      .authorize(email, password)
      .then((res) => {
        if (res.token) {
          setEmail('');
          setPassword('');
          //Меняем стейт email чтобы обновить информацию в Header
          props.updateUserEmail(email);
          //Меняем стейт логина, чтобы нас не выкинуло обратно на страницу входа, а так же меняем стейт для открытия попапа успешной авторизации
          props.onDone();
          props.onLogin();
          history.push('/');
        }
      })

      .catch((err) => {
        console.log(err);
        props.onFalse();
      });
  }

  return (
    <section className="login">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__inputs">
          <input
            className="auth__input"
            type="email"
            minLength="4"
            maxLength="30"
            placeholder="Email"
            required
            value={email ?? ''}
            onChange={handleChangeEmail}
          />
          <input
            className="auth__input"
            type="password"
            minLength="5"
            maxLength="20"
            placeholder="Пароль"
            required
            value={password ?? ''}
            onChange={handleChangePassword}
          />
        </fieldset>
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
