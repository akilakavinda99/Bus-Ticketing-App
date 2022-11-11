import {StyleSheet} from 'react-native';

const localRegisterStyle = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 47,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  labelStyle: {
    fontWeight: '600',
    color: '#111010',
    marginBottom: 5,
    fontSize: 15,
  },
  signupButton: {
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 45,
  },
  hr2: {
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  hveaccount: {
    marginTop: 28,
    textAlign: 'center',
    color: '#D3D3D3',
    fontWeight: '600',
  },
  login: {
    textAlign: 'center',
    color: '#0096FF',
    fontWeight: '600',
  },
  mainView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
  },
});

export default localRegisterStyle;
