import StorageService from './StorageService';

export default class JWTService extends StorageService {
  parseData() {
    if(this.data.expires && typeof(this.data.expires) === "string") {
      this.data.expires = new Date(this.data.expires);
    }
  }

  clear() {
    this.data.token = null;
    this.data.expires = null;
    this.save();
  }

  get token() {
    return this.data.token;
  }

  set token(token) { this.data.token = token; }

  get expires() {
    return this.data.expires;
  }
  set expires(expires) { this.data.expires = expires; }

  get valid() {
    return this.data.token !== null && this.expires > new Date();
  }

  get jwtData() {
    return {token: this.data.token, expires: this.data.expires};
  }
}