import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import axios from "axios";

class AuthStore {
  constructor() {
    this.user = null;
  }

  setUser = token => {
    if (token) {
      localStorage.setItem("myToken", token);
      axios.defaults.headers.common.Authorization = `jwt ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      delete axios.defaults.headers.common.Authorization;
      localStorage.removeItem("myToken");
      this.user = null;
    }
  };

  login = async userData => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/login/", userData);
      const user = res.data;
      this.setUser(user.access);
      console.log(user.access);
    } catch (err) {
      console.error(err.response.data);
    }
  };

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
