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
} from "native-base";
import authStore from "../../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "username",
    password: "password",
  });

  const handleSubmit = () => {
    authStore.signin(user);
    navigation.replace("Explore");
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading>Signin</Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              placeholder="username"
              onChangeText={(value) => setUser({ ...user, username: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              placeholder="password"
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <Button mt="2" onPress={handleSubmit}>
            Submit
          </Button>
          <HStack mt="5" justifyContent="center">
            <Text>I'm a new user. </Text>
            <Link onPress={() => navigation.navigate("Signup")}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({});
