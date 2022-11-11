/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {Button, ProgressBar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import DropDown from 'react-native-paper-dropdown';
import BusCard from '../components/busCard/BusCard';
import IntialComponent from '../components/initialComponent/IntialComponent';
import NoResults from '../components/noResults/NoResults';
import endLocationList from '../constants/endLocation.constants';
import startLocationList from '../constants/location.constants';
import API from '../redux/api/apiConnection';
import getTicketPrice from '../utils/getTicketPrice';
import bookNowScreenStyle from './styles/BookNowScreenStyles';
import reloadAccountStyle from './styles/ReloadAccountStyles';

const BookNowScreen = () => {
  const [showEndDropDown, setShowEndDropDown] = useState(false);
  const [showStartDropDown, setShowStartDropDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initial, setInitial] = useState(true);
  const [availableBuses, setAvailableBuses] = useState([]);
  const [ticketPrices, setTicketPrices] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  // create object from API object
  const api = new API();
  // Search bus function
  const search = async () => {
    if (start === '' && end === '') {
      setFormErrors({
        start: 'Please select a start location',
        end: 'Please select an end location',
      });
      return;
    } else if (start === '') {
      setFormErrors({
        ...formErrors,
        start: 'Please select a start location',
        end: '',
      });
      return;
    } else if (end === '') {
      setFormErrors({
        ...formErrors,
        end: 'Please select an end location',
        start: '',
      });
      return;
    } else {
      setFormErrors({
        ...formErrors,
        end: '',
        start: '',
      });

      const obj = {
        startLocation: start,
        destination: end,
      };

      setInitial(false);
      setLoading(true);
      try {
        const result = await api.post('timetable/getBusByRoute', obj);
        setTicketPrices(result.data.ticketPrice);
        // console.log(result.data);
        setAvailableBuses(result.data.busTimes);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
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
        <Text style={reloadAccountStyle.errorText}>{formErrors.start}</Text>

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
        <Text style={reloadAccountStyle.errorText}>{formErrors.end}</Text>
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
        ) : availableBuses.length === 0 ? (
          <NoResults />
        ) : (
          <View>
            {availableBuses.map(function (f, i) {
              f.startLocation = start;
              console.log(f.arivalTimeOnStart);
              f.destination = end;
              return (
                // <></>
                <BusCard
                  key={i}
                  arrivalTime={f.arivalTimeOnStart}
                  busType={f.bus.busType}
                  allDetails={f}
                  ticketPrice={getTicketPrice(ticketPrices, f.bus.busType)}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BookNowScreen;
