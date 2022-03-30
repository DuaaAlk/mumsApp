import { StyleSheet, Text, View } from "react-native";
import { ScrollView, VStack, HStack, Button } from "native-base";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import appointmentSlotStore from "../../stores/appointmentSlotStore";
import AppointmentSlotItem from "./AppointmentSlotItem";
import AppointmentSlotModal from "../modal/AppointmentSlotModal";
import authStore from "../../stores/authStore";

const AppointmentSlotsList = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  //console.log(appointmentSlotStore.appointmentSlot);
  //authStore.user.appointmentSlots.map((slot) => console.log(slot));

  const appointmentSlotsList = appointmentSlotStore.appointmentSlots.map(
    (slot) =>
      slot ? <AppointmentSlotItem key={slot.dateTime} slot={slot} /> : <></>
  );
  return (
    <ScrollView maxW="500" h="100" background="white">
      <HStack space={3} justifyContent="center" style={styles.buttonWrapper}>
        <Button onPress={handleShow}>+ Appointment Slot</Button>
        <AppointmentSlotModal showModal={showModal} handleClose={handleClose} />
        <Button>Appointments</Button>
      </HStack>
      <VStack space={8}>{appointmentSlotsList}</VStack>
    </ScrollView>
  );
};

export default observer(AppointmentSlotsList);

const styles = StyleSheet.create({
  buttonWrapper: {
    margin: 10,
  },
});
