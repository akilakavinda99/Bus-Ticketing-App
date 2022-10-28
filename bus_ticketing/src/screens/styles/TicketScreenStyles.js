import {StyleSheet} from 'react-native';

const ticketScreenStyle = StyleSheet.create({
  imageBg: {
    width: 221,
    height: 500,
    marginTop: 30,
    borderRadius: 20,
    marginLeft: 85,
  },
  fromTxt: {
    color: 'grey',
    marginLeft: 25,
    marginTop: 15,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
  },
  toTxt: {
    color: 'grey',
    marginLeft: 115,
    marginTop: 15,
    fontWeight: '600',
  },
  to: {
    color: 'black',
    marginLeft: 85,
    marginTop: 5,
    fontWeight: '800',
  },
  from: {
    color: 'black',
    marginLeft: 25,
    marginTop: 5,
    fontWeight: '800',
  },
  mainRow: {
    // paddingLeft: 25,
    // paddingRight: 25,
  },
  dt: {
    marginTop: 20,
    fontWeight: '600',
    color: 'grey',
    marginLeft: 20,
  },

  seatNo: {
    marginTop: 20,
    fontWeight: '600',
    color: 'grey',
    marginLeft: 30,
  },
  dt1: {
    marginTop: 5,
    fontWeight: '800',
    color: 'black',
    marginLeft: 20,
  },
  seatNo2: {
    marginTop: 5,
    fontWeight: '800',
    color: 'black',
    marginLeft: 90,
  },
  bsNumberTxt: {
    marginTop: 30,
    fontWeight: '700',
    color: 'grey',
    textAlign: 'center',
  },
  nmbrPlate: {
    marginTop: 20,
    marginLeft: 40,
    width: 150,
    borderRadius: 10,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'orange',
  },
  sveBtn: {
    marginTop: 20,
    width: 280,
    marginLeft: 50,
  },
});

export default ticketScreenStyle;
