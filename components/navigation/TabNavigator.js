import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Explore from "../post/Explore";
import UserProfile from "../authuntication/UserProfile";
import CreatePost from "../post/CreatePost";
import Search from "../post/Search";
import DTPicker from "../DTPicker";
import TabTopNavigator from "./TabTopNavigator";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          // tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          // tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-add-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          // tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TabTopNavigator}
        options={{
          // tabBarLabel: "",
          //headerTitle: () => <UserProfile />,
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    maxHeight: "20",
  },
});
