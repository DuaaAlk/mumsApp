import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Input, Icon, ScrollView, VStack } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import postsStore from "../../stores/postStore";
import PostItem from "./PostItem";

const Search = () => {
  const [query, setQuery] = useState("     ");

  const postList = postsStore.posts
    .filter((post) => post.title.toLowerCase().includes(query.toLowerCase()))
    .map((post) => <PostItem key={post._id} post={post} />);

  return (
    <View style={styles.searchWrapper}>
      <Input
        variant="rounded"
        placeholder="Search"
        style={styles.searchField}
        onChangeText={(query) => setQuery(query)}
        InputLeftElement={
          <Icon
            as={<EvilIcons name="search" size={24} color="black" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
      />
      <ScrollView maxW="500" h="1000" background="white">
        <VStack space={8}>{postList}</VStack>
      </ScrollView>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: "white",
  },
  searchField: {
    margin: 100,
  },
});
