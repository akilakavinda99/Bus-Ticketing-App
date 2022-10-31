import {PermissionsAndroid} from 'react-native';

const androidPermissionCheck = async () => {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    await PermissionsAndroid.request(permission);
    Promise.resolve();
  } catch (error) {
    console.log(error);
    Promise.reject(error);
  }
};

export default androidPermissionCheck;
