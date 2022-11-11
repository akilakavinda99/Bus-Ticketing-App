/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {Button, Checkbox, Divider, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import reloadAccountStyle from './styles/ReloadAccountStyles';
import {cardValidation} from './validations/ReloadAccountValidations';

const ReloadAccount = ({route}) => {
  const {ticket, fromPayment} = route.params;
  const [chkSaveCard, setChkSaveCard] = useState(false);
  const [chkConditions, setChkConditions] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  // Set initial details.
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  // to handle the errors
  const [errorChkConditions, setErrorChkConditions] = useState('');
  const [cardErrors, setCardErrors] = useState({});

  // execute when the reload button is clicked
  const handleReload = () => {
    // get errors on card number, expiry and cvc
    const errors = cardValidation(cardDetails);
    setCardErrors(errors);

    // check if the conditions checkbox is checked
    if (!chkConditions) {
      setErrorChkConditions('Please accept the terms and conditions');
    } else {
      setErrorChkConditions('');
    }

    setIsSubmit(true);
  };

  const handleExpiryChange = text => {
    if (text.length === 2) {
      setCardDetails({...cardDetails, expiry: text + '/'});
    } else if (text.length > 2 && text[2] !== '/') {
      setCardDetails({
        ...cardDetails,
        expiry: text.slice(0, 2) + '/' + text.slice(2, 4),
      });
    }
  };

  // to handle the reload
  // check if the card number, expiry and cvc are valid
  // check if the conditions checkbox is checked
  useEffect(() => {
    if (Object.keys(cardErrors).length === 0 && isSubmit && chkConditions) {
      console.log('success');
    } else {
      setIsSubmit(false);
    }
  }, [cardErrors, isSubmit, chkConditions]);

  return (
    <View>
      {/* Show the account balance in the top of the page */}
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        {fromPayment ? (
          <></>
        ) : (
          <>
            <Text>Account Balance (LKR)</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                50
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  paddingBottom: 5,
                }}>
                .00
              </Text>
            </View>
          </>
        )}
      </View>
      <View style={reloadAccountStyle.cardView}>
        <TextInput
          mode="outlined"
          activeOutlineColor="#9FA5AA"
          value={fromPayment ? ticket.ticketPrice : ''}
          editable={fromPayment ? false : true}
          label="Amount"
          outlineColor="#9FA5AA"
          keyboardType="numeric"
          maxLength={16}
          error={cardErrors.cardNumber}
          style={reloadAccountStyle.textInput}
          onChangeText={value =>
            setCardDetails({...cardDetails, cardNumber: value})
          }
        />
        <Text style={reloadAccountStyle.errorText}>
          {cardErrors.cardNumber}
        </Text>
        {/* Field to enter the card details (card number, expiry and cvc) */}
        <TextInput
          mode="outlined"
          activeOutlineColor="#9FA5AA"
          label="Card Number"
          outlineColor="#9FA5AA"
          keyboardType="numeric"
          maxLength={16}
          error={cardErrors.cardNumber}
          style={reloadAccountStyle.textInput}
          onChangeText={value =>
            setCardDetails({...cardDetails, cardNumber: value})
          }
        />
        <Text style={reloadAccountStyle.errorText}>
          {cardErrors.cardNumber}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '45%'}}>
            <TextInput
              mode="outlined"
              activeOutlineColor="#9FA5AA"
              label="Expiry"
              outlineColor="#9FA5AA"
              keyboardType="phone-pad"
              maxLength={5}
              error={cardErrors.cardExpiry}
              style={reloadAccountStyle.textInput}
              value={cardDetails.expiry}
              onChangeText={value => {
                setCardDetails({...cardDetails, expiry: value});
                handleExpiryChange(value);
              }}
            />
            <Text style={reloadAccountStyle.errorText}>
              {cardErrors.cardExpiry}
            </Text>
          </View>
          <View style={{width: '40%'}}>
            <TextInput
              mode="outlined"
              activeOutlineColor="#9FA5AA"
              label="CVC"
              outlineColor="#9FA5AA"
              keyboardType="numeric"
              maxLength={4}
              error={cardErrors.cvc}
              secureTextEntry={true}
              right={<TextInput.Icon icon="eye-off" />}
              style={reloadAccountStyle.textInput}
              onChangeText={value =>
                setCardDetails({...cardDetails, cvc: value})
              }
            />
            <Text style={reloadAccountStyle.errorText}>{cardErrors.cvc}</Text>
          </View>
          <Icon
            name="help-circle"
            size={25}
            style={{
              alignSelf: 'center',
            }}
          />
        </View>
        <Divider />

        <ImageBackground
          imageStyle={{
            borderRadius: 10,
          }}
          style={{
            width: '100%',
            height: 100,
          }}
          resizeMode="center"
          source={{
            uri: 'https://i.postimg.cc/GmNMvkN2/Frame-1.png',
          }}
        />

        <Text
          style={{
            alignSelf: 'center',
            fontSize: 10,
          }}>
          Approved by the Central Bank of Sri Lanka
        </Text>
      </View>
      <View
        style={{
          margin: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            color="#0096FF"
            status={chkSaveCard ? 'checked' : 'unchecked'}
            onPress={() => {
              setChkSaveCard(!chkSaveCard);
            }}
          />
          <Text
            style={{
              fontSize: 12,
            }}>
            Save my card details for faster payments.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Checkbox
            color="#0096FF"
            status={chkConditions ? 'checked' : 'unchecked'}
            onPress={() => {
              setChkConditions(!chkConditions);
            }}
          />
          <Text
            style={{
              fontSize: 12,
            }}>
            I agree to
            <Text
              style={{
                color: '#0096FF',
              }}>
              {' '}
              Terms and Conditions
            </Text>
          </Text>
        </View>
        <Text style={reloadAccountStyle.errorText}>{errorChkConditions}</Text>
        <Button
          style={{
            marginTop: 20,
            borderRadius: 50,
          }}
          uppercase={true}
          mode="contained"
          color="#0096FF"
          onPress={handleReload}>
          Reload
        </Button>
      </View>
    </View>
  );
};

export default ReloadAccount;
