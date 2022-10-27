import {StyleSheet} from 'react-native';

const loginStyle = StyleSheet.create({
  view: {
    marginLeft: 23,
    marginRight: 23,
  },
  textInput: {
    width: 347,
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
  googleButton: {
    width: 200,
    marginLeft: 80,
    borderRadius: 5,
  },
  hr: {
    marginTop: 15,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
  },
  mainView: {
    backgroundColor: 'white',
    height: '100%',
  },
  checkbox: {
    marginTop: 15,
    flexDirection: 'row',
  },
  chckboxText: {
    marginTop: 9,
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 10,
    width: 300,
    marginLeft: 28,
  },
  forgotPw: {
    marginTop: 28,
    textAlign: 'center',
    color: '#0096FF',
    fontWeight: '600',
  },
  noaccount: {
    marginTop: 28,
    textAlign: 'center',
    color: '#D3D3D3',
    fontWeight: '600',
  },
  hr2: {
    marginTop: 25,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
  },
  signup: {
    textAlign: 'center',
    color: '#0096FF',
    fontWeight: '600',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 40,

    fontSize: 30,
  },
});
export default loginStyle;
