import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailScreen from './Screens/DetailScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import SignInScreen from './Screens/SignInScreen';
import SplashScreen from './Screens/SplashScreen';
import StateData from './Context/State';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <StateData>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Onboarding'>
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='Splash' component={SplashScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name='SignIn' component={SignInScreen} options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name='Details' component={DetailScreen} options={{ animation: 'slide_from_bottom' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateData>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
