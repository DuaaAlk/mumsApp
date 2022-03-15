import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  Center,
  FormControl,
  Input,
  Button,
} from "native-base";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "username",
    password: "password",
    email: "",
    image: "",
    firstName: "",
    lastName: "",
  });

  const handleSubmit = () => {
    authStore.signup(user);
    navigation.replace("mainNav");
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading>Signup</Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              placeholder="Username"
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Password"
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Email"
              type="email"
              onChangeText={(value) => setUser({ ...user, email: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="First Name"
              onChangeText={(value) => setUser({ ...user, firstName: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Last Name"
              onChangeText={(value) => setUser({ ...user, lastName: value })}
            />
          </FormControl>
          <Button mt="2" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({});
