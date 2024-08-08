import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  TextInput,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

// components
import NearYou from "@/components/NearYou";
import BLineReports from "@/components/BLineReports";
import CustomButton from "../../components/CustomButton";

const destination = () => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  // Bottom Sheet Modal Ref
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["78%"];

  const handleBottomSheet = () => {
    bottomSheetModalRef.current?.present();
    setIsOpen(true);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json`,
        {
          params: {
            address: location,
            key: "YOUR_GOOGLE_API_KEY", // Replace with your API key
          },
        }
      );
      if (response.data.results.length > 0) {
        const { lat, lng } = response.data.results[0].geometry.location;
        navigation.navigate("Map", { latitude: lat, longitude: lng });
      } else {
        Alert.alert("No results", "No location found.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to retrieve location.");
    }
  };

  return (
    <BottomSheetModalProvider>
      <LinearGradient colors={["#3D6876", "#D89734"]} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello Esteban,</Text>
          <Text style={styles.question}>Where are you going?</Text>
        </View>
        {/* //Users current location */}
        <View style={styles.currentLocationContainer}>
          <Ionicons
            name="location-outline"
            size={24}
            color="#fff"
            style={styles.locationIcon}
          />
          <Text style={styles.currentLocationText}>Current Loccation</Text>
        </View>

        {/* //Destination title */}
        {/* <Text style={styles.destinationTitle}>Destination</Text> */}

        {/* Destination Input */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Destination"
            placeholderTextColor="#888"
            value={location}
            onChangeText={setLocation}
            onSubmitEditing={handleSearch}
          />
        </View>

        {/* <NearYou/> */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.0446,
            longitude: -118.24927,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{
              latitude: 34.0224,
              longitude: -118.2851,
            }}
            title={"Expo Park"}
            description={"Exposition park in los angeles"}
          />
        </MapView>

        {/* Bottom Sheet */}
        <CustomButton title="See Reports" onPress={handleBottomSheet} />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => setIsOpen(false)}
          handleIndicatorStyle={{ backgroundColor: "white", width: 100 }}
          backgroundStyle={{ backgroundColor: "#3D6876", borderRadius: 20 }}
        >
          <LinearGradient colors={["#3D6876", "#D89734"]}>
            <BLineReports />
          </LinearGradient>
        </BottomSheetModal>
      </LinearGradient>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  header: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  greeting: {
    color: "#fff",
    fontSize: 18,
  },
  question: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  currentLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  locationIcon: {
    marginRight: 10,
  },
  currentLocationText: {
    color: "#fff",
    fontSize: 16,
  },
  destinationTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "#fff",
  },
  searchContainer: {
    marginHorizontal: 40,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  map: {
    height: 200,
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  linesHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  lineItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "1E1E1E",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  lineInfo: {
    flex: 1,
    marginLeft: 10,
  },
  lineText: {
    color: "#fff",
    fontSize: 16,
  },
  collapsibleContent: {
    paddingLeft: 40,
    paddingBottom: 10,
  },
  collapsibleText: {
    color: "#fff",
    fontSize: 16,
  },
  circleA: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
  },
  circleB: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF3B30",
    alignItems: "center",
    justifyContent: "center",
  },
  circleC: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#4CD964",
    alignItems: "center",
    justifyContent: "center",
  },
  circleD: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#5856D6",
    alignItems: "center",
    justifyContent: "center",
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default destination;
