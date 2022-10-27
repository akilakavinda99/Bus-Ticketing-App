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
import BookNowScreen from './src/screens/BookNowScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocalRegisterScreen from './src/screens/LocalRegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import PaymentScreen from './src/screens/PaymentScreen';
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
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="LocalRegister"
          component={LocalRegisterScreen}
          options={{
            title: 'Local User Registertion',
          }}
        />
        <Stack.Screen
          name="BookNow"
          component={BookNowScreen}
          options={{
            title: 'Book Your Ticket Now',
          }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            title: 'Payment Method',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
