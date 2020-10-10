import ApiBase from './ApiBase';

export default class ApiDownloadsService extends ApiBase {
  get() {
    const path = "/api/v1/downloads"

    return this.httpClient.get(
      this.buildUrl(path)
    ).then(
      result => result.data
    ).catch(
      (error) => {
        throw(error.response.data.error)
      }
    )
  }
}