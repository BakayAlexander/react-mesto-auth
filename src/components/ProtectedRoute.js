import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import BouncingLoader from '../utils/BouncingLoader';
import Main from './Main';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? (
          props.isRendering ? (
            <BouncingLoader />
          ) : (
            <Main
              onEditProfile={props.onEditProfile}
              onEditAvatar={props.onEditAvatar}
              onAddPlace={props.onAddPlace}
              onCardClick={props.onCardClick}
              cards={props.cards}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              email={props.email}
            />
          )
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    </Route>
  );
}

export default ProtectedRoute;
