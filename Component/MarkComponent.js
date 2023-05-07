import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView, {Callout, Circle, Marker} from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        style={styles.map}
        region={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{latitude: 24.8607, longitude: 67.0011}}
          title="Karachi"
          description="Marker Description"
          // draggable={true}
          // onDragStart={e => {
          //   console.log('Drag', e.nativeEvent.coordinate);
          // }}
        />
        {/* <Circle center={{latitude: 24.8607, longitude: 67.0011}} radius={300} /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
