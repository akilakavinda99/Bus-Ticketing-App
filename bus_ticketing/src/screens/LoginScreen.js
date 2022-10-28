import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import loginStyle from './styles/LoginScreenStyles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const navigateToRegisterType = () => {
    navigation.navigate('RegisterType');
  };

  const login = () => {
    navigation.navigate('Home');
  };

  const [checked, setChecked] = React.useState(false);
  return (
    <View style={loginStyle.mainView}>
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
          style={loginStyle.textInput}></TextInput>
        <Text style={loginStyle.labelStyle}>Password</Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          placeholder="Password"
          style={loginStyle.textInput}
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
          onPress={login}>
          Login
        </Button>
        <Text style={loginStyle.forgotPw}>Forgot Password?</Text>
        <View style={loginStyle.hr2} />
        <Text style={loginStyle.noaccount}>Dont have an account?</Text>
        <TouchableOpacity onPress={navigateToRegisterType}>
          <Text style={loginStyle.signup}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
