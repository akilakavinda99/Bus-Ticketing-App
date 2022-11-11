/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../redux/api/apiConnection';
import loginStyle from './styles/LoginScreenStyles';

const LoginScreen = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [formErrors, setFormErrors] = useState('');

  const navigation = useNavigation();
  // Navigate to register type screen
  const navigateToRegisterType = () => {
    navigation.navigate('RegisterType');
  };

  // Create login object to pass to the body of post req.
  const loginObject = {
    username: userName,
    password: password,
  };

  // Create API object from API class.
  const api = new API();

  // Send Login Request Function.
  const sendLoginRequest = async data => {
    setLoading(true);

    if (!userName && !password) {
      setFormErrors('Please enter email and password');
      setLoading(false);
    } else if (!userName) {
      setFormErrors('Please enter email');
      setLoading(false);
    } else if (!emailPattern.test(userName)) {
      setFormErrors('Invalid email address');
      setLoading(false);
    } else if (!password) {
      setFormErrors('Please enter password');
      setLoading(false);
    } else {
      try {
        const result = await api.post('main/login', loginObject);

        if (result.status === 200) {
          await AsyncStorage.setItem('userId', result.data._id);
          navigation.navigate('Home');
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  return (
    <View style={loginStyle.mainView}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={loginStyle.view}>
          <Text style={loginStyle.loginText}>Login</Text>
          <Button
            icon="google"
            mode="outlined"
            color="black"
            style={loginStyle.googleButton}
            uppercase={false}
            onPress={() => console.log('Pressed')}>
            Log in with google
          </Button>
          <View style={loginStyle.hr} />
          <Text style={loginStyle.labelStyle}>Email</Text>
          <TextInput
            mode="outlined"
            activeOutlineColor="black"
            outlineColor="#9FA5AA"
            placeholder="Email"
            keyboardType="email-address"
            style={loginStyle.textInput}
            onChangeText={value => setUserName(value)}
          />
          <Text style={loginStyle.labelStyle}>Password</Text>
          <TextInput
            mode="outlined"
            activeOutlineColor="black"
            outlineColor="#9FA5AA"
            placeholder="Password"
            secureTextEntry={true}
            style={loginStyle.textInput}
            onChangeText={value => setPassword(value)}
          />
          <Text style={{
            alignSelf: 'center',
            color: 'red',
            marginBottom: 10,
            marginLeft: 10,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
            {formErrors}
          </Text>
          <View style={loginStyle.checkbox}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={loginStyle.chckboxText}>Remember me</Text>
          </View>
          <Button
            mode="contained"
            style={loginStyle.loginButton}
            color="#0096FF"
            onPress={sendLoginRequest}>
            Login
          </Button>
          <Text style={loginStyle.forgotPw}>Forgot Password?</Text>
          <View style={loginStyle.hr2} />
          <Text style={loginStyle.noaccount}>Dont have an account?</Text>
          <TouchableOpacity onPress={navigateToRegisterType}>
            <Text style={loginStyle.signup}>SignUp</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default LoginScreen;
