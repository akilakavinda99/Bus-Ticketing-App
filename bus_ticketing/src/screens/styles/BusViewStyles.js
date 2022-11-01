import {StyleSheet} from 'react-native';

const busViewScreenStyle = StyleSheet.create({
  busNUmberText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  busNUmber: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
  arrivalTime: {
    marginTop: 30,
    fontSize: 17,
  },
  textView: {
    marginLeft: 30,
  },
  destination: {
    marginTop: 10,
    fontSize: 17,
  },
  tPriceText: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
  },
  tPrice: {
    // marginTop: 30,
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
  },
  bookButton: {
    marginLeft: 45,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
  },
});

export default busViewScreenStyle;
