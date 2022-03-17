import { StyleSheet, Text } from "react-native";
import { Avatar, HStack, VStack, TextArea, Heading, Button } from "native-base";
import authStore from "../../stores/authStore";

const UserProfile = () => {
  return (
    <VStack space={5} style={styles.userProfileWrapper}>
      <HStack space={3}>
        <Avatar
          size="xl"
          source={{
            uri: authStore.user.image
              ? baseURL + authStore.user.image
              : "https://cdn4.vectorstock.com/i/1000x1000/18/98/user-icon-female-person-symbol-profile-avatar-sign-vector-18991898.jpg",
          }}
        />
        <VStack>
          <Heading style={styles.userNameWrapper} size="lg" ml="-1">
            {authStore.user.firstName + " " + authStore.user.lastName}
          </Heading>
          {/* <Text style={styles.userNameWrapper}>@{authStore.user.username}</Text> */}
          <Text>{authStore.user.bio}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  userProfileWrapper: {
    padding: 30,
    backgroundColor: "white",
  },
  userNameWrapper: {
    paddingTop: 30,
    paddingLeft: 10,
  },
  userProfileImage: {
    height: 100,
    width: 100,
  },
});
