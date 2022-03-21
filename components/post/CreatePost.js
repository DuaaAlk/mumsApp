import { StyleSheet, TextInput } from "react-native";
import {
  Avatar,
  HStack,
  VStack,
  useToast,
  Button,
  FormControl,
  ScrollView,
} from "native-base";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";

import authStore from "../../stores/authStore";
import postsStore from "../../stores/postStore";

const CreatePost = ({ navigation }) => {
  const user = authStore.user;
  const [post, setPost] = useState({
    title: "",
    description: "",
    createdBy: user,
  });
  const toast = useToast();
  const route = useRoute();

  const setPostHandler = () => {};

  const handleSubmit = () => {
    console.log(post);
    postsStore.createPost(post, navigation, toast);
    setPost({
      title: "",
      description: "",
      createdBy: user,
    });
  };

  return (
    <ScrollView>
      <VStack space={5} style={styles.postCreateWrapper}>
        <HStack space={2} style={styles.titleWrapper}>
          <Avatar
            source={{
              uri: user.image
                ? baseURL + user.image
                : "https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg",
            }}
          />
          <FormControl>
            <TextInput
              style={styles.inputTitle}
              onChangeText={(title) => setPost({ ...post, title })}
              isRequired="true"
              placeholder="Post title"
              value={post.title}
              numberOfLines={1}
            />
          </FormControl>
        </HStack>
        <FormControl>
          <TextInput
            multiline
            numberOfLines={5}
            style={styles.inputDescription}
            onChangeText={(description) => setPost({ ...post, description })}
            isRequired="true"
            placeholder="Write your post here"
            value={post.title}
          />
        </FormControl>
        <Button variant="solid" colorScheme="primary" onPress={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  postCreateWrapper: {
    padding: 15,
    backgroundColor: "white",
  },
  postItemImage: {
    height: 50,
    width: 50,
  },
  inputTitle: {
    height: 30,
    padding: 10,
    marginTop: 10,
    marginRight: 60,

    borderWidth: 0.2,
    borderColor: "gray",
    shadowOpacity: 3,
  },
  inputDescription: {
    height: 100,
    padding: 10,
    margin: 3,
    borderWidth: 0.2,
    borderColor: "gray",
    shadowOpacity: 3,
  },
  titleWrapper: {},
});
