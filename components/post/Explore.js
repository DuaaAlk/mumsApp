import { StyleSheet, Text, View } from "react-native";
import { VStack, ScrollView } from "native-base";
import { observer } from "mobx-react";
import PostItem from "./PostItem";
import postsStore from "../../stores/postStore";

const Explore = () => {
  const postList = postsStore.posts.map((post) => (
    <PostItem key={post._id} post={post} />
  ));

  return (
    <ScrollView maxW="500" h="80" background="white">
      <VStack space={8}>{postList}</VStack>
    </ScrollView>
  );
};

export default observer(Explore);

const styles = StyleSheet.create({});
