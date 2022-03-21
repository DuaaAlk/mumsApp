import { StyleSheet, Text } from "react-native";
import { Avatar, HStack, VStack, Heading, Button } from "native-base";
import authStore from "../../stores/authStore";
import { useState } from "react";
import AppointmentSlotModal from "../modal/AppointmentSlotModal";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

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
        <VStack space={2}>
          <Heading style={styles.userNameWrapper} size="lg" ml="-1">
            {authStore.user.firstName + " " + authStore.user.lastName}
          </Heading>
          <Text>@{authStore.user.username}</Text>
        </VStack>
      </HStack>
      <Text style={styles.userBio}>Bio: {authStore.user.bio}</Text>
      <HStack space={3} justifyContent="center">
        <Button onPress={handleShow}>+ Appointment Slot</Button>
        <AppointmentSlotModal showModal={showModal} handleClose={handleClose} />
        <Button>Appointments</Button>
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
  userBio: {
    marginLeft: 30,
  },
});
