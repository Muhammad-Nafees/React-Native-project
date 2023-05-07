import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const Ambulance = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.maincontainer}>
        <Text style={styles.Textone}> Below The Options For Emergency</Text>
      <View style={styles.container1}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ambulance Help')}>
          <Text style={styles.first}>Ambulance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Fire Brigade Help')}>
          <Text style={styles.second}>Fire Brigade</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Police Help')}>
          <Text style={styles.third}>Police</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ambulance;

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
    // margin:30
  },
  Textone:{
    textAlign:"center",
    // marginTop:40,
    position:"relative",
    top:60,
    fontSize:19,
    fontStyle:"italic",
    color:"white"
  }
});
