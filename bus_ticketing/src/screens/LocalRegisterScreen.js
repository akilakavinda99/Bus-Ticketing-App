import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {BoxPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import localRegisterStyle from './styles/LocalRegisterStyle';

const LocalRegisterScreen = () => {
  const [passsword, setPassword] = React.useState('');
  const onChange = passsword => setPassword(passsword);

  return (
    <View>
      <View style={localRegisterStyle.mainView}>
        <Text style={localRegisterStyle.labelStyle}>Name</Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          placeholder="Name"
          style={localRegisterStyle.textInput}
        />
        <Text style={localRegisterStyle.labelStyle}>Email</Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          placeholder="Email"
          style={localRegisterStyle.textInput}
        />
        <Text style={localRegisterStyle.labelStyle}>NIC</Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          placeholder="NIC"
          style={localRegisterStyle.textInput}
        />
        <Text style={localRegisterStyle.labelStyle}>Password</Text>
        <TextInput
          mode="outlined"
          activeOutlineColor="black"
          outlineColor="#9FA5AA"
          placeholder="Password"
          style={localRegisterStyle.textInput}
          onChangeText={onChange}
        />
      </View>

      <BoxPasswordStrengthDisplay password={passsword} boxColor="#A9A9A9" />
      <Button
        mode="contained"
        style={localRegisterStyle.signupButton}
        color="#0096FF">
        Signup
      </Button>
      <View style={localRegisterStyle.hr2} />
      <Text style={localRegisterStyle.hveaccount}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={null}>
        <Text style={localRegisterStyle.login}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocalRegisterScreen;
