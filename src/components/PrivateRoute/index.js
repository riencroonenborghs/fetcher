// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';

// function PrivateRoute({ children, ...rest }) {
//   const authenticated = false;

//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         authenticated ? (
//           children
//         ) : (
//             <Redirect
//               to={{
//                 pathname: "/sign-in",
//                 state: { from: location }
//               }}
//             />
//           )
//       }
//     />
//   );
// }

// export default PrivateRoute;



import React, { Component, location } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  render () {
    console.log(`PrivateRoute render this.props.authenticated: ${this.props.authenticated}`);
    return this.props.authenticated ?
      <Route {...this.props} /> :
      <Redirect to={{
          pathname: "/sign-in",
          state: { from: location }
        }}
      />
  }
}

// export default PrivateRoute;
const mapStateToProps = state => {
  console.log(`PrivateRoute mapStateToProps state.authentication.authenticated: ${state.authentication.authenticated}`);
  const authenticated = state.authentication.authenticated;
  return { authenticated }
};
export default connect(
  mapStateToProps
)(PrivateRoute);
