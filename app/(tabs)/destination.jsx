import React, { useState }from 'react';
import { StyleSheet, View, Text, ScrollView, Alert, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import GetThere from '../../components/GetThere';
import NearYou from '../../components/NearYou';
import axios from 'axios';
import ToggleButton from '../../components/ToggleButton';

const destination = () => {
  const [location, setLocation] = useState('');
  const [showGetThere, setShowGetThere] = useState(false);
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

  const toggleComponent = () => {
    setShowGetThere(!showGetThere);
  };

  console.log('toggleComponent is a:', typeof toggleComponent);

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

    <ToggleButton showGetThere={showGetThere} onPress={toggleComponent} />
    {showGetThere ? <GetThere /> : <NearYou />}
    
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
    marginHorizontal: 45,
    width: 200,
    position: 'absolute',
    paddingTop: 140
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
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