import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import CameraScreen from "../Screens/CameraScreen";
import ImagesSreen from "../Screens/ImagesSreen";

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          /**
           * 페이지 이동시 새로고침 같은 느낌임
           * 이거 안하면 카메라가 처음 렌더링 될때는 잘 보여주는데
           * 딴 페이지 갔다가 카메라들어가면 안떠서 넣어줬음
           * */
          options={{ unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Camera"
          component={CameraScreen}
          options={{ headerShown: false, unmountOnBlur: true }}
        />
        <Tab.Screen
          name="Images"
          component={ImagesSreen}
          options={{ unmountOnBlur: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
