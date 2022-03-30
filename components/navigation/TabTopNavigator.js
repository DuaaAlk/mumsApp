import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppointmentSlotModal from "../modal/AppointmentSlotModal";
import Explore from "../post/Explore";
import UserProfile from "../authuntication/UserProfile";
import AppointmentSlotsList from "../appointment/AppointmentSlotsList";

const Tab = createMaterialTopTabNavigator();

function TabTopNavigator() {
  return (
    <>
      <UserProfile />
      <Tab.Navigator>
        <Tab.Screen
          name="Posts"
          component={Explore}
          options={{
            // tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="post-outline"
                size={25}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Appointments"
          component={AppointmentSlotsList}
          options={{
            // tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="table" size={25} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default TabTopNavigator;
