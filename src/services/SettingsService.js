import StorageService from './StorageService';

export default class SettingsService extends StorageService {
  parseData() {}

  clear() {
    this.data.protocol = 'http';
    this.data.hostname = 'localhost';
    this.data.port = 3000;
    this.save();
  }

  get protocol() {
    return this.data.protocol;
  }

  set protocol(protocol) { this.data.protocol = protocol; }

  get hostname() {
    return this.data.hostname;
  }

  set hostname(hostname) { this.data.hostname = hostname; }

  get port() {
    return this.data.port;
  }

  set port(port) { this.data.port = port; }
}