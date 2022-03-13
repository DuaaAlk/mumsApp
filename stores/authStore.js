import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import decode from "jwt-decode";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }

  signup = async (user) => {
    try {
      const response = await instance.post("/user/signup", user);
      const { token } = response.data;
      this.setUser(token);
      console.log("Line 19 signup: authStore: token = " + token);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user) => {
    try {
      const response = await instance.post("/user/signin", user);
      const { token } = response.data;
      this.setUser(token);
      console.log("Line 28 signin: authStore: token = " + token);
    } catch (error) {
      console.error("Line 30 signin: authStore: " + error);
    }
  };

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
    } catch (error) {
      console.error(error);
    }
  };

  signout = async () => {
    try {
      this.user = null;
      await AsyncStorage.removeItem("token");
      instance.defaults.headers.common.Authorization = "";
    } catch (error) {
      console.error(error);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      if (Date.now() < +decode(token).exp) this.setUser(token);
      else this.signout();
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
// It will only call this function when the app first starts
export default authStore;
