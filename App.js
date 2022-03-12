import { StyleSheet } from "react-native";
import { NativeBaseProvider } from "native-base";
import RootNavigator from "./components/navigation";

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
