import axios from 'axios';

export default class ApiBase {
  constructor() {
    this.protocol = "http";
    this.hostname = "mother";
    this.port = 80;
    this.httpClient = axios;
  }

  buildUrl(path) {
    if (!path.startsWith('/')) {
      path = `/${path}`;
    }
    return `${this.protocol}://${this.hostname}:${this.port}${path}`;
  }
}