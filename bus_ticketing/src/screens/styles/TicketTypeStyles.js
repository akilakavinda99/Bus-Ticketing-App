import { StyleSheet } from 'react-native';

const ticketTypeScreenStyle = StyleSheet.create({
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
    paddingRight: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  creditText: {
    marginTop: 8,
    fontWeight: '600',
    marginRight: 20,
    flexGrow: 1,
  },
  creditText2: {
    flexGrow: 1,
    marginTop: 8,
    fontWeight: '600',
    marginRight: 53,
  },
  proceedBtn: {
    marginTop: 150,
    marginLeft: 25,
    marginRight: 25,
  },
});

export default ticketTypeScreenStyle;
