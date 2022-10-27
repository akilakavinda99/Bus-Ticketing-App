import {StyleSheet} from 'react-native';

const paymentScreenStyle = StyleSheet.create({
  mainView: {
    height: '100%',
    backgroundColor: 'white',
  },
  image: {
    marginTop: 20,
    width: 300,
    height: 220,
  },
  imageView: {
    marginTop: 30,
    marginLeft: 40,
  },
  rowView: {
    flexDirection: 'row',
    width: 250,
    height: 40,
    marginLeft: 65,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  creditText: {
    marginTop: 8,
    marginLeft: 0,
    fontWeight: '600',
    marginRight: 20,
  },
  creditText2: {
    marginTop: 8,
    marginLeft: 20,
    fontWeight: '600',
    marginRight: 53,
  },
  proceedBtn: {
    marginTop: 150,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default paymentScreenStyle;
