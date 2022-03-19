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

  signup = async (user, navigation) => {
    try {
      const response = await instance.post("/user/signup", user);
      const { token } = response.data;
      this.setUser(token, navigation);
    } catch (error) {
      console.log("Line 20 signup: authStore: " + error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const response = await instance.post("/user/signin", user);
      const { token } = response.data;
      this.setUser(token, navigation);
    } catch (error) {
      console.error("Line 30 signin: authStore: " + error);
    }
  };

  setUser = async (token, navigation) => {
    try {
      await AsyncStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.user = decode(token);
      navigation.navigate("mainNav");
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
