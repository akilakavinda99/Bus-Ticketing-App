import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {BoxPasswordStrengthDisplay} from 'react-native-password-strength-meter';
import API from '../redux/api/apiConnection';
import localRegisterStyle from './styles/LocalRegisterStyle';

const LocalRegisterScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = React.useState('');
  const onChange = password => setPassword(password);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nic, setNic] = useState('');
  const [loading, setLoading] = useState(false);

  const registerUser = async () => {
    setLoading(true);
    // create object from API object
    const api = new API();
    const userObject = {
      name,
      email,
      nic,
      password,
    };

    console.log('userOb', userObject);

    api
      .post('main/register', userObject)
      .then(res => {
        setLoading(false);
        Alert.alert('Success', 'Registeration Success', [
          {
            text: 'Go To Login',
            onPress: () => navigation.navigate('Login'),
          },
        ]);
        console.log('Sesd', res);
      })
      .catch(err => {
        setLoading(false);

        console.log('errrr', err.response);
      });
    // console.log('Sginup rees', result.data);
  };
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={localRegisterStyle.mainView}>
            <Text style={localRegisterStyle.labelStyle}>Name</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="Name"
              style={localRegisterStyle.textInput}
              onChangeText={value => setName(value)}
            />
            <Text style={localRegisterStyle.labelStyle}>Email</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="Email"
              style={localRegisterStyle.textInput}
              onChangeText={value => setEmail(value)}
            />
            <Text style={localRegisterStyle.labelStyle}>NIC</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="NIC"
              style={localRegisterStyle.textInput}
              onChangeText={value => setNic(value)}
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

          <BoxPasswordStrengthDisplay password={password} boxColor="#A9A9A9" />
          <Button
            onPress={registerUser}
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
        </>
      )}
    </View>
  );
};

export default LocalRegisterScreen;
