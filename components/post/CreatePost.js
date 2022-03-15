import { StyleSheet } from "react-native";
import { Avatar, HStack, VStack, TextArea, Input, Button } from "native-base";
import { useState } from "react";
import authStore from "../../stores/authStore";
import postsStore from "../../stores/postStore";

const CreatePost = ({ navigation }) => {
  const user = authStore.user;
  const [post, setPost] = useState({
    title: "",
    description: "",
    createdBy: user,
  });

  const handleSubmit = () => {
    postsStore.createPost(post);
    // console.log("Line 17: CreatePost.js => Post: ", post);
    navigation.navigate("Explore");
  };

  return (
    <VStack space={5} style={styles.postCreateWrapper}>
      <HStack space={3}>
        <Avatar
          style={styles.postItemImage}
          // source={{
          //   uri: user.image
          //     ? baseURL + user.image
          //     : "https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg",
          // }}
        />
        <Input
          onChange={(value) => setPost({ ...post, title: value })}
          isRequired="true"
          w="85%"
          h={30}
          mt={2}
          shadow={2}
          placeholder="Post Title"
          _light={{
            placeholderTextColor: "trueGray.700",
          }}
          _dark={{
            bg: "coolGray.800",
          }}
          _hover={{
            bg: "coolGray.200",
          }}
        />
      </HStack>
      <TextArea
        onChange={(value) => setPost({ ...post, description: value })}
        isRequired="true"
        shadow={2}
        h={200}
        placeholder="Write your post here"
        w="100%"
        _light={{
          placeholderTextColor: "trueGray.700",
        }}
        _dark={{
          bg: "coolGray.800",
        }}
        _hover={{
          bg: "coolGray.200",
        }}
      />
      <Button variant="solid" colorScheme="primary" onPress={handleSubmit}>
        Submit
      </Button>
    </VStack>
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
});
