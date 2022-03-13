import { StyleSheet, Text } from "react-native";
import {
  HStack,
  VStack,
  Box,
  Image,
  AspectRatio,
  Center,
  Stack,
  Heading,
  Avatar,
} from "native-base";

const PostItem = ({ post }) => {
  return (
    <>
      <Box alignItems="center" width="100%">
        <Box
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4">
            <Stack space={2}>
              <HStack space={5} style={styles.productItemWrapper}>
                <Avatar
                  style={styles.productItemImage}
                  // source={{ uri: baseURL + product.image }}
                />
                <Heading size="md" ml="-1">
                  {post.title}
                </Heading>
              </HStack>
            </Stack>
            <Text style={styles.postItemDescription} fontWeight="400">
              {post.description}
            </Text>
            <Text
              style={styles.postItemTime}
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              6 mins ago
            </Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default PostItem;

const styles = StyleSheet.create({
  productItemWrapper: {
    alignItems: "center",
  },
  productItemImage: {
    height: 50,
    width: 50,
  },
  postItemDescription: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  postItemTime: {
    textAlign: "right",
  },
});
