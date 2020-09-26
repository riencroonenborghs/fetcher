import localStorage from 'local-storage';

export default class AuthenticationService {
  constructor() {
    this.key = 'fetcher';
    this.data = {}
  }

  load() {
    this.data = JSON.parse(
      localStorage.get(this.key) || '{}'
    );
    if(this.data.expires) {
      this.data.expires = new Date(this.data.expires);
    }
  }

  save(token, expires) {
    const data = JSON.stringify({
      token: token,
      expires: expires
    });
    localStorage.set(this.key, data);
  }

  clear() {
    
  }

  get token() {
    return this.data.token;
  }

  get expires() {
    return this.data.expires;
  }

  get valid() {
    return this.data.token !== null && this.expires > new Date()
  }
}