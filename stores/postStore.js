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

  createPost = async (post, navigation, toast) => {
    try {
      const response = await instance.post("/user/posts", post);
      //this.posts.push(response.data.payload);
      this.posts = [response.data.payload, ...this.posts];
      toast.show({
        title: "👍🏻",
        placement: "bottom",
      });
      navigation.navigate("Explore");
    } catch (error) {
      console.log("Line 23: postStore -> createPost -> error", error);
    }
  };
}

const postsStore = new PostStore();
postsStore.fetchPosts();
export default postsStore;
