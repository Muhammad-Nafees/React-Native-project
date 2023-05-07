import React from 'react';
import {getCurrentLocation} from './Component/LocationPermission.js'; // Importing LocationPermission.js
import Ambulance from './Component/Home.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Component/Login.js';
import Ambulaceoptions from './Options/Ambulanceoptions.js';
import Firebrigadeoptions from './Options/Firebrigadeoptions.js';
import Policeoptions from './Options/Policeoptions.js';
import MapScreen from './Component/MarkComponent.js';

const App = () => {
  const Stack = createNativeStackNavigator();

  // Call getCurrentLocation function to get the current location
  getCurrentLocation().then(location => console.log(location)); // or do something else with the location data

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Ambulance} />
        <Stack.Screen name="Ambulance Help" component={Ambulaceoptions} />
        <Stack.Screen name="Police Help" component={Policeoptions} />
        <Stack.Screen name="Fire Brigade Help" component={Firebrigadeoptions} />
        <Stack.Screen name="MapScreenhere" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
