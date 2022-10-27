import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {Button, ProgressBar} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import IntialComponent from '../components/initialComponent/IntialComponent';
import NoResults from '../components/noResults/NoResults';
import endLocationList from '../constants/endLocation.constants';
import startLocationList from '../constants/location.constants';
import bookNowScreenStyle from './styles/BookNowScreenStyles';

const BookNowScreen = () => {
  const navigation = useNavigation();

  const [showEndDropDown, setShowEndDropDown] = useState(false);
  const [showStartDropDown, setShowStartDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(true);
  const [availableBuses, setAvailableBuses] = useState([]);

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const search = () => {
    setInitial(false);
    setLoading(true);
    navigation.navigate('Payment');
  };

  return (
    <View style={bookNowScreenStyle.mainView}>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 30,
        }}>
        <DropDown
          dropDownStyle={bookNowScreenStyle.fromDropdown}
          label={'From'}
          mode={'outlined'}
          visible={showEndDropDown}
          showDropDown={() => setShowEndDropDown(true)}
          onDismiss={() => setShowEndDropDown(false)}
          value={start}
          setValue={setStart}
          list={startLocationList}
        />
        <View
          style={{
            marginTop: 20,
          }}
        />
        <DropDown
          label={'To'}
          mode={'outlined'}
          visible={showStartDropDown}
          showDropDown={() => setShowStartDropDown(true)}
          onDismiss={() => setShowStartDropDown(false)}
          value={end}
          setValue={setEnd}
          list={endLocationList}
        />
      </View>

      <Button
        uppercase={false}
        mode="contained"
        style={bookNowScreenStyle.searchBtn}
        color="#0096FF"
        onPress={search}>
        Search For A Bus
      </Button>
      <ScrollView>
        {initial ? (
          <IntialComponent />
        ) : loading ? (
          <View style={bookNowScreenStyle.activityStyle}>
            <ActivityIndicator size="large" />
          </View>
        ) : availableBuses == 0 ? (
          <NoResults />
        ) : (
          <Text>Buses</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default BookNowScreen;
