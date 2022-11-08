import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, TabBarIOSItem } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenA from "./page/Home";
import DiabetesCare from "./page/DiabetesCare";
import Profile from "./page/Profile";
import Notify from "./page/Notify";
import Cart from "./page/Cart";
import Detail from "./components/details/Detail";
import Contact from "./page/Contact";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const Tab = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // screenOptions={{ header: () => null }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "Product") {
              iconName = "plus-square";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "My Profile") {
              iconName = "user";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "Notify") {
              iconName = "bell";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "Cart") {
              iconName = "cart-plus";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } else if (route.name === "Contact") {
              iconName = "phone";
              size = focused ? 25 : 20;
              // color = focused ? "#f0f" : "#555";
            } 
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "white",
          activeBackgroundColor: "#4157ff",
          inactiveTintColor: "#555",
          inactiveBackgroundColor: "white",
          showLabel: true,
          labelStyle: { fontSize: 14 },
        }}
      >
        tabBarOptions={{
            labelStyle: {
              // fontFamily: boldFont,
              fontSize: 15,
              textTransform: 'none',
              paddingVertical: 6,
            },
            activeTintColor: theme.topTab.topTabActiveColor,
            inactiveTintColor: theme.topTab.topTabInactiveColor,
            indicatorStyle: {
              backgroundColor: theme.topTab.topTabIndicatorColor,
              height: 2,
              bottom: -1,
            },
            style: {
              borderBottomWidth: 1,
              borderBottomColor: theme.borderColor,
              backgroundColor: theme.topTab.topTabBgColor,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
          }}
          style={{
            backgroundColor: theme.header.backgroundColor,
            paddingTop: 10,
          }}
          screenOptions={({navigation, route}) => {
            if (route.name === 'Offers' && navigation.isFocused()) {
              console.log("Offers") 
            } else if (route.name !== 'Offers' && navigation.isFocused()) {
              console.log("Offer Lists")
              
            }
          }}
        <Tab.Screen
          name="Home"
          component={ScreenA}
          // options={{ tabBarBadge: 3 }}
        />
        {/* options={{header: () => null}} */}
        <Tab.Screen
          name="Notify"
          options={{ tabBarBadge: 8 }}
          component={Notify}
        />
        <Tab.Screen name="Product" component={DiabetesCare} />
        {/* <Tab.Screen name="Cart" component={Cart} /> */}
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="My Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
