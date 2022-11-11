import { StyleSheet } from 'react-native';

const homeCardStyles = StyleSheet.create({
  secondaryView: {
  },
  mainView: {
    flexDirection: 'row',
    // marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    // width: 350,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    marginTop: 40,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default homeCardStyles;
