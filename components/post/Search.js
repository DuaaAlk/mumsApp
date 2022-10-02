import { StyleSheet, TextInput, View } from "react-native";
import { useState } from "react";
import { Input, Icon, ScrollView, VStack } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import postsStore from "../../stores/postStore";
import PostItem from "./PostItem";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const postList = postsStore.posts
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .map((post) => <PostItem key={post._id} post={post} />);

  const handleChangeText = (query) => {
    setQuery(query);
    if (query === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  const filteredPostList = () => {
    if (searchShow) {
      return (
        <ScrollView style={styles.scrollViewStyle}>
          <VStack space={8}>{postList}</VStack>
        </ScrollView>
      );
    }
  };

  return (
    <View style={styles.searchWrapper}>
      <Input
        style={styles.searchField}
        placeholder="Search"
        onChangeText={handleChangeText}
        InputLeftElement={
          <Icon
            as={<EvilIcons name="search" size={24} color="black" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
      />
      {filteredPostList()}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: "white",
    padding: 5,
  },
  searchField: {
    height: 30,
    padding: 5,
    borderColor: "black",
  },
  scrollViewStyle: {
    paddingTop: 5,
    maxWidth: 500,
    height: 1000,
    backgroundColor: "white",
  },
});
