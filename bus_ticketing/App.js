import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LocalRegisterScreen from './src/screens/LocalRegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterationTypeScreen from './src/screens/RegisterationTypeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  console.log('Thsi is consoleeeeeeeee');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="RegisterType" component={RegisterationTypeScreen} />
        <Stack.Screen
          name="LocalRegister"
          component={LocalRegisterScreen}
          options={{
            title: 'Local User Registertion',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
