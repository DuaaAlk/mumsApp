import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class PostStore {
  posts = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchPosts = async () => {
    try {
      const response = await instance.get("/posts");
      this.posts = response.data;
    } catch (error) {
      console.log("Line 15: postStore -> fetchPosts -> error", error);
    }
  };
}

const postsStore = new PostStore();
postsStore.fetchPosts();
export default postsStore;
