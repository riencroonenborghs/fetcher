import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  const authenticated = false;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/sign-in",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;