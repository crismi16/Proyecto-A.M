import { SafeAreaView } from "react-native"
import { LoginScreen } from "./screens/LoginScreen"
import { RegisterScreen } from "./screens/RegisterScreen"
import { PasswordScreen } from "./screens/PasswordScreen"
import { SplashScreen } from "./screens/SplashScreen"


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <LoginScreen/>
      {/* <RegisterScreen/> */}
      {/* <PasswordScreen/> */}
      {/* <SplashScreen/> */}
    </SafeAreaView>
  )
}