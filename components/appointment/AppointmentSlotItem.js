import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, HStack, Button } from "native-base";

const AppointmentSlotItem = ({ slot }) => {
  const day = new Date(slot.dateTime).getDate();
  const month = new Date(slot.dateTime).getMonth();
  const year = new Date(slot.dateTime).getFullYear();

  return (
    <View>
      <Box
        style={styles.slotItemWrapper}
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
        <HStack>
          <Text style={styles.slotItemDescrioption} fontWeight="400">
            {day + "/" + month + "/" + year}
          </Text>
          <Text style={styles.slotItemDescrioption} fontWeight="400">
            Price= {slot.price}
          </Text>
          {/* <Button onPress={() => console.log("hello world")}>Book me</Button> */}
        </HStack>
      </Box>
    </View>
  );
};

export default AppointmentSlotItem;

const styles = StyleSheet.create({
  slotItemWrapper: {
    alignItems: "center",
    width: "100%",
    height: 80,
    padding: 5,
  },
  slotItemDescrioption: {
    margin: 10,
  },
});
