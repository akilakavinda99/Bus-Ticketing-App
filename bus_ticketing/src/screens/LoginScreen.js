import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import API from '../redux/api/apiConnection';
import loginStyle from './styles/LoginScreenStyles';

const LoginScreen = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const navigateToRegisterType = () => {
    navigation.navigate('RegisterType');
  };

  const obj = {
    username: userName,
    password: password,
  };

  console.log('adsd');
  const api = new API();
  const sendLoginRequest = async data => {
    setLoading(true);
    const result = await api.post('main/login', obj);
    await AsyncStorage.setItem('userId', result.data._id);
    setLoading(false);
    console.log('this is results', result.data);
    navigation.navigate('Home');
  };

  // navigation.navigate('Home');
  // console.log('THis isssss', data);
  // useEffect(() => {
  //   dispatch(sendBusRequest());
  // }, []);
  // console.log(loading);
  // console.log('this is errr', error);

  const [checked, setChecked] = React.useState(false);
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
            style={loginStyle.textInput}
            onChangeText={value => setUserName(value)}></TextInput>
          <Text style={loginStyle.labelStyle}>Password</Text>
          <TextInput
            mode="outlined"
            activeOutlineColor="black"
            outlineColor="#9FA5AA"
            placeholder="Password"
            style={loginStyle.textInput}
            onChangeText={value => setPassword(value)}
          />
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
