import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // Define a base url for a REST API
  baseURL() {
    return 'https://heroku-fastapi-kayak-72f2824d7d9a.herokuapp.com'
  }

  // Implement a default request method
  request(config: any) {
    return this.$http.request(config)
  }
}