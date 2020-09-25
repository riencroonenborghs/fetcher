import ApiBase from './ApiBase';

export default class AuthenticationService extends ApiBase {
  signIn(email, password) {
    const path = "/users/sign_in"
    const data = {
      user: {
        email: email,
        password: password
      }
    };

    return this.httpClient.post(
      this.buildUrl(path),
      data
    ).then(
      result => result.data
    ).catch(
      (error) => {
        throw(error.response.data.error)
      }
    )
  }
}