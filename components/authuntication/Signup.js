import { StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";
import {
  VStack,
  Heading,
  Box,
  Center,
  FormControl,
  HStack,
  Button,
  Link,
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
    <Center w="100%" style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading>Signup</Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={(password) => setUser({ ...user, password })}
            />
          </FormControl>
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              onChangeText={(email) => setUser({ ...user, email })}
            />
          </FormControl>
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              placeholder="First Name"
              autoCapitalize="none"
              onChangeText={(firstName) => setUser({ ...user, firstName })}
            />
          </FormControl>
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={(lastName) => setUser({ ...user, lastName })}
            />
          </FormControl>
          <FormControl>
            <TextInput
              style={styles.inputContainer}
              onChangeText={(bio) => setUser({ ...user, bio })}
              placeholder="Bio"
              autoCapitalize="none"
            />
          </FormControl>
          <Button mt="2" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
        <HStack mt="5" justifyContent="center">
          <Text mt="5">I'm an existing user. </Text>
          <Link onPress={() => navigation.navigate("Signin")}>Sign In</Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  inputContainer: {
    borderRadius: 3,
    borderWidth: 0.4,
    height: 30,
    borderColor: "#D3D3D3",
    padding: 5,
  },
});
