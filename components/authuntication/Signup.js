import { StyleSheet } from "react-native";
import { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  Center,
  FormControl,
  Input,
  Button,
  TextArea,
} from "native-base";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    image: "",
    firstName: "",
    lastName: "",
    bio: "",
  });

  const handleSubmit = () => {
    authStore.signup(user, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading>Signup</Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              placeholder="Username"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Password"
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Email"
              type="email"
              onChangeText={(email) => setUser({ ...user, email })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="First Name"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="Last Name"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
          </FormControl>
          <FormControl>
            <Input
              onChangeText={(bio) => setUser({ ...user, bio })}
              placeholder="Bio"
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

const styles = StyleSheet.create({
  inputs: {},
});
