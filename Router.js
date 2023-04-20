import { NavigationContainer } from "@react-navigation/native";
import Categories from "./src/pages/Categories";
import Detail from "./src/pages/Detail";
import Meals from "./src/pages/Meals";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Router() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#FFA500" },
          }}
        />
        <Stack.Screen name="DetailPage" component={Detail} options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#FFA500" },
            title:'Detail'
          }} />
        <Stack.Screen name="MealsPage" component={Meals} options={{
            headerTitleAlign: "center",
            headerTitleStyle: { color: "#FFA500" },
            title:'Meals',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
