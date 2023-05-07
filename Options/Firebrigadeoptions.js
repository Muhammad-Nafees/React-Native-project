import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Ambulanceoptions = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.maincontainer}>

      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MapScreenhere')}>
          <Text style={styles.first}>Fire</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MapScreenhere')}>
          <Text style={styles.second}>Cylende Blast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MapScreenhere')}>
          <Text style={styles.third}>ShotCircuit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ambulanceoptions;

const styles = StyleSheet.create({
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
  first: {
    marginTop: 50,
    paddingVertical: 22,
    paddingHorizontal: 22,
    backgroundColor: '#000046',
    color: 'white',
    fontSize: 22,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
  },
  second: {
    marginTop: 50,
    paddingVertical: 22,
    paddingHorizontal: 22,
    backgroundColor: '#000046',
    color: 'white',
    fontSize: 22,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
  },
  third: {
    marginTop: 50,
    paddingVertical: 22,
    paddingHorizontal: 22,
    backgroundColor: '#000046',
    color: 'white',
    fontSize: 22,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
  },
  maincontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3C3B3F',
  },
});
