import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Permissions from 'react-native-permissions';
import {PermissionsAndroid} from 'react-native';

export async function requestLocationPermission() {
  if (Platform.OS === 'ios') {
    const response = await Permissions.request('location');
    return response === 'authorized';
  } else {
    const response = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return response === PermissionsAndroid.RESULTS.GRANTED;
  }
};



export async function getCurrentLocation() {
  const permission = await requestLocationPermission();
  if (!permission) {
    return null;
  }

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve(position.coords);
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
}
