import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Main from './Main';

function ProtectedRoute({ component: Component, ...props }) {
  return (
    <Route>
      {() =>
        props.isLoggedIn ? (
          <Main
            onEditProfile={props.onEditProfile}
            onEditAvatar={props.onEditAvatar}
            onAddPlace={props.onAddPlace}
            onCardClick={props.onCardClick}
            cards={props.cards}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    </Route>
  );
}

// function ProtectedRoute(props) {
//   return <Route>{() => !props.isLoggedIn && <Redirect to="/sign-in" />}</Route>;
// }

export default ProtectedRoute;
