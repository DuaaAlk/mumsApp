import { StyleSheet, View } from "react-native";
import {
  Modal,
  FormControl,
  Button,
  Input,
  HStack,
  Text,
  useToast,
} from "native-base";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import authStore from "../../stores/authStore";
import appointmentSlotStore from "../../stores/appointmentSlotStore";
import NumericInput from "react-native-numeric-input";

const AppointmentSlotModal = ({ showModal, handleClose }) => {
  const toast = useToast();

  const [slot, setSlot] = useState({
    consultant: authStore.user,

    dateTime: new Date(),
    duration: 1,

    price: 1,
    available: true,
  });

  const handleDateTime = (event, dateTime) => {
    setSlot({ ...slot, dateTime });
  };

  const handleSave = (event) => {
    appointmentSlotStore.createAppointmentSlot(slot, toast);
    handleClose();
  };
  return (
    <View>
      <Modal isOpen={showModal} onClose={handleClose}>
        <Modal.Content maxWidth="500px">
          <Modal.Header>Add Appointment Slot</Modal.Header>
          <Modal.Body>
            <View style={styles.inpurWrapper}>
              <Text style={styles.textWrapper}>Date and start time:</Text>
              <DateTimePicker
                style={{ alignItems: "center" }}
                value={slot.dateTime}
                mode="datetime"
                display="default"
                minimumDate={Date.now()}
                onChange={handleDateTime}
              />
            </View>
            <HStack space={3} style={styles.inpurWrapper}>
              <Text style={styles.textWrapper}>Duration:</Text>
              <NumericInput
                minValue={1}
                maxValue={4}
                step={0.5}
                onChange={(duration) => setSlot({ ...slot, duration })}
                totalWidth={80}
                totalHeight={35}
                iconSize={20}
                valueType="real"
                rounded
              />
            </HStack>
            <HStack space={8} style={styles.inpurWrapper}>
              <Text style={styles.textWrapper}>Price:</Text>
              <Input
                type="number"
                placeholder="Price per duration"
                width={180}
                onChangeText={(price) => setSlot({ ...slot, price })}
              ></Input>
            </HStack>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={handleClose}
              >
                Cancel
              </Button>
              <Button onPress={handleSave}>Save</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default AppointmentSlotModal;

const styles = StyleSheet.create({
  inpurWrapper: {
    marginBottom: 10,
  },
  textWrapper: {
    padding: 5,
  },
  datePicker: {},
});
