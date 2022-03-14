import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

const addPostButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert("Post", "Create Post.. ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };
  return (
    <View>
      <Ionicons
        onPress={handlePress}
        name="ios-add-circle-outline"
        size={24}
        color="black"
      />
    </View>
  );
};

export default addPostButton;

const styles = StyleSheet.create({});
