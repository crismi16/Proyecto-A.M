import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { BottomTabsNavigator } from "./src/navigator/BottomTabsNavigator"

export const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigator/>
    </NavigationContainer>
  )
}