import { decorate, observable } from "mobx";
import axios from "axios";

class AuthStore {
  constructor() {
    this.user = null;
  }

  register = async userData => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/register/", userData);
      this.user = res.data;
    } catch (err) {
      console.error(err.response.data);
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();

export default authStore;
