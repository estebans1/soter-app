import React, { useState }from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import { GOOGLE_API_KEY } from "./enviroments";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const destination = () => {
  const [location, setLocation] = useState('');
  const navigation = useNavigation();
  const handleSearch = async () => {
    try {
      // Replace with your actual API key
      const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
          address: location,
          key: 'YOUR_GOOGLE_API_KEY' // Replace with your API key
        }
      });
      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        navigation.navigate('Map', { latitude: lat, longitude: lng });
      } else {
        Alert.alert('No results', 'No location found.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to retrieve location.');
    }
  };

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 34.044600,
          longitude: -118.249270,
          latitudeDelta: 0.100,
          longitudeDelta: 0.100
      }}/>
   <View style={styles.searchContainer}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        // key: GOOGLE_API_KEY,
        language: 'en',
      }}
    />
    </View>
  </View>
  );``
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black'
  },
  map: {
    width: 404,
    height: 288,
    backgroundColor: 'black',
    borderRadius: 12,
    flexShrink: 0,
    marginTop: 200,
    border: 45,
    marginLeft: 14,

  },
 searchContainer:{
  // position: "absolute",
  width: "90%",
  backgroundColor: "white",
  shadowColor: "black",
  shadowOffset: {width: 2, height: 2},
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 4,
  padding: 8,
  borderRadius: 8,
 },

 input:{
  borderColor: "#888",
  borderWidth: 1,
 }
});