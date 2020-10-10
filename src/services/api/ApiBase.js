import axios from 'axios';

export default class ApiBase {
  constructor(protocol, hostname, port, token = null) {
    this.protocol = protocol;
    this.hostname = hostname;
    this.port = port;
    this.httpClient = axios;
    axios.defaults.headers.common['Authorization'] = token;
  }

  buildUrl(path) {
    if (!path.startsWith('/')) {
      path = `/${path}`;
    }
    return `${this.protocol}://${this.hostname}:${this.port}${path}`;
  }
}