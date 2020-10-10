import localStorage from 'local-storage';

export default class StorageService {
  constructor() {
    this.key = 'fetcher';
    this.data = {
      token: null,
      expires: null,
      protocol: 'http',
      hostname: 'localhost',
      port: 5000
    }
  }

  load() {
    this.data = JSON.parse(
      localStorage.get(this.key) || '{}'
    );
    this.parseData();
  }

  parseData() {
    if(this.data.expires && typeof(this.data.expires) === "string") {
      this.data.expires = new Date(this.data.expires);
    }
  }

  save() {
    const dataToSave = JSON.stringify(this.data);
    localStorage.set(this.key, dataToSave);
  }

  clear() {
    localStorage.remove(this.key);
    this.data = {};
  }

  get jwtData() {
    return { token: this.data.token, expires: this.data.expires };
  }

  set jwtData(data) {
    this.data.token = data.token;
    this.data.expires = data.expires;
  }

  get serverData() {
    return { protocol: this.data.protocol, hostname: this.data.hostname, port: this.data.port };
  }

  set serverData(data) {
    this.data.protocol = data.protocol;
    this.data.hostname = data.hostname;
    this.data.port = data.port;
  }
}