import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserId = async () => {
  try {
    // Get the userId from AsyncStorage
    const value = await AsyncStorage.getItem('userId');
    // console.log('this is di', value);
    return value;
  } catch (e) {
    console.log(e);
  }
};

export default getUserId;
