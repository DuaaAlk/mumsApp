import { StyleSheet, Text } from "react-native";
import { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  Center,
  FormControl,
  Input,
  Link,
  HStack,
  Button,
  Icon,
} from "native-base";
import authStore from "../../stores/authStore";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Signin = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    authStore.signin(user, navigation);
  };

  return (
    <Center w="100%" style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading>Signin</Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              placeholder="username"
              onChangeText={(value) => setUser({ ...user, username: value })}
              autoCapitalize="none"
              InputLeftElement={
                <Icon
                  as={<Ionicons name="person" size={24} color="black" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="password"
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  ml="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
            />
          </FormControl>
          <Button mt="2" onPress={handleSubmit}>
            Submit
          </Button>
          <HStack mt="5" justifyContent="center">
            <Text mt="5">I'm a new user. </Text>
            <Link onPress={() => navigation.navigate("Signup")}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
