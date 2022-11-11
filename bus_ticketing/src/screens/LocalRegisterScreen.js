import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { BoxPasswordStrengthDisplay } from 'react-native-password-strength-meter';
import API from '../redux/api/apiConnection';
import localRegisterStyle from './styles/LocalRegisterStyle';
import reloadAccountStyle from './styles/ReloadAccountStyles';
import { LocalRegisterValidation } from './validations/LocalRegisterValidation';

const LocalRegisterScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userObject, setUserObject] = useState({});

  const registerUser = async () => {
    setLoading(true);
    setFormErrors(LocalRegisterValidation(userObject));
    setIsSubmitting(true);
  };

  const onChange = (name, value) => {
    setUserObject({ ...userObject, [name]: value });
  };

  useEffect(() => {
    const api = new API();
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      try {
        api.post('main/register', userObject)
          .then(res => {
            setLoading(false);
            Alert.alert('Success', 'Registeration Success', [
              {
                text: 'Go To Login',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
          }).catch(err => {
            console.log(err.response);
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      setIsSubmitting(false);
    } else {
      setLoading(false);
      setIsSubmitting(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors, isSubmitting]);

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
              value={userObject.name}
              style={localRegisterStyle.textInput}
              onChangeText={value => onChange('name', value)}
            />
            <Text style={reloadAccountStyle.errorText}>{formErrors.name}</Text>

            <Text style={localRegisterStyle.labelStyle}>Email</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="Email"
              keyboardType="email-address"
              value={userObject.email}
              style={localRegisterStyle.textInput}
              onChangeText={value => onChange('email', value)}
            />
            <Text style={reloadAccountStyle.errorText}>{formErrors.email}</Text>

            <Text style={localRegisterStyle.labelStyle}>NIC</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="NIC"
              value={userObject.nic}
              style={localRegisterStyle.textInput}
              onChangeText={value => onChange('nic', value)}
            />
            <Text style={reloadAccountStyle.errorText}>{formErrors.nic}</Text>

            <Text style={localRegisterStyle.labelStyle}>Password</Text>
            <TextInput
              mode="outlined"
              activeOutlineColor="black"
              outlineColor="#9FA5AA"
              placeholder="Password"
              value={userObject.password}
              secureTextEntry={true}
              style={localRegisterStyle.textInput}
              onChangeText={value => onChange('password', value)}
            />
            <Text style={reloadAccountStyle.errorText}>{formErrors.password}</Text>

            <Button
              onPress={registerUser}
              mode="contained"
              style={localRegisterStyle.signupButton}
              color="#0096FF">
              Signup
            </Button>
          </View>

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
