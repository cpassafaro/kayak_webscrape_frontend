import Model from "./Model";

export default class Kayak extends Model {
  // Set the resource route of the model
  resource() {
    return "all-kayaks";
  }
}
