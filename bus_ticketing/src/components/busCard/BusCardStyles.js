import {StyleSheet} from 'react-native';

const busCardStyles = StyleSheet.create({
  secondaryView: {
    flexDirection: 'row',
  },
  mainView: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    width: 350,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  aTime: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '800',
  },
  text: {
    marginTop: 40,
    fontSize: 15,
    fontWeight: 'bold',
  },
  chip: {
    marginLeft: 70,
    marginTop: 10,
    color: 'red',
  },
  chip2: {
    marginLeft: 40,
    marginTop: 10,
    color: 'red',
  },

  type: {
    marginLeft: 20,
    marginTop: 30,
    fontSize: 15,
    fontWeight: '500',
  },
  price: {
    marginLeft: 50,
    marginTop: 30,
  },
});

export default busCardStyles;
