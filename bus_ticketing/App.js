import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BookNowScreen from './src/screens/BookNowScreen';
import BusViewScreen from './src/screens/BusViewScreen';
import HomeScreen from './src/screens/HomeScreen';
import LocalRegisterScreen from './src/screens/LocalRegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import MapDirectionScreen from './src/screens/MapDirectionScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import QRScreen from './src/screens/QRScreen';
import RegisterationTypeScreen from './src/screens/RegisterationTypeScreen';
import ReloadAccount from './src/screens/ReloadAccount';
import TicketScreen from './src/screens/TicketScreen';
import TicketTypeScreen from './src/screens/TicketTypeScreen';
import UserProfile from './src/screens/UserProfile';
import RideNowScreen from './src/screens/RideNowScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <MCIcon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MCIcon name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

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
        <Stack.Screen
          name="Home"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="RegisterType" component={RegisterationTypeScreen} />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        /> */}

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
        <Stack.Screen
          name="QR"
          component={QRScreen}
          options={{
            title: 'QR',
          }}
        />
        <Stack.Screen
          name="TicketType"
          component={TicketTypeScreen}
          options={{
            title: 'Select your ticket type',
          }}
        />
        <Stack.Screen
          name="TicketScreen"
          component={TicketScreen}
          options={{
            title: 'Ticket View',
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapDirectionScreen}
          options={{
            title: 'View Route',
          }}
        />
        <Stack.Screen
          name="ReloadAccount"
          component={ReloadAccount}
          options={{
            title: 'Reload Account',
          }}
        />
        <Stack.Screen
          name="BusView"
          component={BusViewScreen}
          options={{
            title: 'Bus View',
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RideNow"
          component={RideNowScreen}
          options={{
            title: 'Scan Your QR',
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
