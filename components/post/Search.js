import { StyleSheet, View } from "react-native";
import React from "react";
import { Input, Icon, ScrollView, VStack } from "native-base";
import { EvilIcons } from "@expo/vector-icons";

const Search = () => {
  const postList = postsStore.posts.map((post) => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <View style={styles.searchWrapper}>
      <Input
        variant="rounded"
        placeholder="Search"
        style={styles.searchField}
        InputLeftElement={
          <Icon
            as={<EvilIcons name="search" size={24} color="black" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
      />
      <ScrollView maxW="500" h="80" background="white">
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
