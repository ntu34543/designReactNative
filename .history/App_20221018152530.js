import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TabBarIOSItem } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import banner from "./components/Banner";
import topProduct from "./components/TopProduct";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{ header: () => null }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "banner") {
              iconName = "autoprefixer";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "topProductbanner") {
              iconName = "btc";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#f0f",
          inactiveTintColor: "#555",
          inactiveBackgroundColor: "#999",
          showLabel: true,
          labelStyle: { fontSize: 14 },
        }}
      >
        <Tab.Screen 
          name="Banner"
          component={banner}
          options={{ tabBarBadge: 3 }}
        />
        {/* options={{header: () => null}} */}
        <Tab.Screen name="Diabetes Care" component={topProduct} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
