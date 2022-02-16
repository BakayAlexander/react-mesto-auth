import React from 'react';
import BouncingLoader from '../utils/BouncingLoader';

function AuthForm(props) {
  return (
    <>
      <h2 className="auth__title">{props.title}</h2>
      <form className="auth__form">
        <fieldset className="auth__inputs">
          <input
            className="auth__input"
            // id=""
            // name="link"
            type="text"
            placeholder="Email"
            required
            // value={''}
            // onChange={''}
          />
          <input
            className="auth__input"
            // id=""
            // name="link"
            type="text"
            placeholder="Пароль"
            required
            // value={''}
            // onChange={''}
          />
        </fieldset>
        <button className="auth__button" type="submit">
          {/* {!isSubmitting ? 'Зарегистрироваться' : <BouncingLoader />} */}
          {props.button}
        </button>
      </form>
    </>
  );
}

export default AuthForm;
