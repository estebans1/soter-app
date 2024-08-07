import React, { useState }from 'react';
import { StyleSheet, View, Text, ScrollView, Alert, TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Collapsible from 'react-native-collapsible';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

const destination = () => {
  const [location, setLocation] = useState('');
  const [collapsedA, setCollapsedA] = useState(true);
  const [collapsedB, setCollapsedB] = useState(true);
  const [collapsedC, setCollapsedC] = useState(true);
  const [collapsedD, setCollapsedD] = useState(true);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try { 
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

return (
  <LinearGradient colors={['#3D6876', '#D89734']} style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.greeting}>Hello Esteban,</Text>
      <Text style={styles.question}>Where are you going?</Text>
    </View>

    {/* //Users current location */}
    <View style={styles.currentLocationContainer}>
      <Ionicons name="location-outline" size={24} color='#fff' style={styles.locationIcon} />
      <Text style={styles.currentLocationText}>Current Loccation</Text>
    </View>

    {/* //Destination title */}
    {/* <Text style={styles.destinationTitle}>Destination</Text> */}

    {/* Destination Input */}
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder='Destination'
        placeholderTextColor="#888"
        value={location}
        onChangeText={setLocation}
        onSubmitEditing={handleSearch}
      />
    </View>
    
    {/* //Map Section */}
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 34.044600,
        longitude: -118.249270,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
      {/* //This is an example Marker */}
      <Marker
        coordinate={{
          latitude: 34.0224,
          longitude: -118.2851,
        }}
        title={"Expo Park"}
        description={"Exposition park in los angeles"}
      />
    </MapView>

    {/* // this is the Train Line Section */}
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.linesHeader}>Lines near you</Text>

      {/* //A Line */}
      <TouchableOpacity onPress={() => setCollapsedA(!collapsedA)} style={styles.lineItem} >
        <View style={styles.circleA}>
          <Text style={styles.circleText}>A</Text>
        </View>
        <View style={styles.lineInfo}>
          <Text style={styles.lineText}>Line A</Text>
        </View>
        <Ionicons name={collapsedA ? "chevron-down" : "chevron-up"} size={24} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedA}>
      <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Dowtown Long Beach</Text>
          <Text style={styles.collapsibleText}>Disney Hall</Text>
          <Text style={styles.collapsibleText}>Arcadia</Text>
          <Text style={styles.collapsibleText}>Azusa</Text>
          <Text style={styles.collapsibleText}>Chinatown</Text>
          <Text style={styles.collapsibleText}>Highland Park</Text>
          <Text style={styles.collapsibleText}>South Pasadena</Text>
          <Text style={styles.collapsibleText}>Pasadena</Text>
        </View>
      </Collapsible>

      {/* Line B */}
      <TouchableOpacity onPress={() => setCollapsedB(!collapsedB)} style={styles.lineItem}>
        <View style={styles.circleB}>
          <Text style={styles.circleText}>B</Text>
        </View>
        <View style={styles.lineInfo}>
          <Text style={styles.lineText}>Line B</Text>
        </View>
        <Ionicons name={collapsedB ? "chevron-down" : "chevron-up"} size={24} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedB}>
        <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Line B information</Text>
        </View>
      </Collapsible>

      {/* Line C */}
      <TouchableOpacity onPress={() => setCollapsedC(!collapsedC)} style={styles.lineItem}>
        <View style={styles.circleC}>
          <Text style={styles.circleText}>C</Text>
        </View>
        <View style={styles.lineInfo}>
          <Text style={styles.lineText}>Line C</Text>
        </View>
        <Ionicons name={collapsedC ? "chevron-down" : "chevron-up"} size={24} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedC}>
        <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Line C information</Text>
        </View>
      </Collapsible>

      {/* Line D */}
      <TouchableOpacity onPress={() => setCollapsedD(!collapsedD)} style={styles.lineItem}>
        <View style={styles.circleD}>
          <Text style={styles.circleText}>D</Text>
        </View>
        <View style={styles.lineInfo}>
          <Text style={styles.lineText}>Line D</Text>
        </View>
        <Ionicons name={collapsedD ? "chevron-down" : "chevron-up"} size={24} color="white" />
      </TouchableOpacity>
      <Collapsible collapsed={collapsedD}>
        <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Line D information</Text>
        </View>
      </Collapsible>

    </ScrollView>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingLeft: 20,
    // backgroundColor: 'transparent',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  question: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  currentLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#2D2D2D',
    padding: 10,
  },
  locationIcon: {
    marginRight: 10,
  },
  currentLocationText: {
    color: '#fff',
    fontSize: 16,
  },
  destinationTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
    // backgroundColor: '#2D2D2D'
  },
  searchContainer: {
    marginHorizontal: 40,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  map: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  linesHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000'
  },
  lineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '1E1E1E',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  lineInfo: {
    flex: 1,
    marginLeft: 10,
  },
  lineText: {
    color: '#fff',
    fontSize: 16,
    // marginBottom: 5,
  },
  collapsibleContent: {
    paddingLeft: 40,
    paddingBottom: 10,
  },
  collapsibleText: {
    color: '#fff',
    fontSize: 16,
  },
  circleA: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleB:{
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF3B30',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleC: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4CD964',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleD: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#5856D6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});

export default destination