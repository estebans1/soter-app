import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

const NearYou = () => {
  const [collapsedA, setCollapsedA] = useState(true);
  const [collapsedB, setCollapsedB] = useState(true);
  const [collapsedC, setCollapsedC] = useState(true);
  const [collapsedD, setCollapsedD] = useState(true);

  return (
    <View style={styles.container}>
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

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.linesHeader}>Lines near you</Text>

        <TouchableOpacity
          onPress={() => setCollapsedA(!collapsedA)}
          style={styles.lineItem}
        >
          <View style={styles.circleA}>
            <Text style={styles.circleText}>A</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.lineText}>Line A</Text>
          </View>
          <Ionicons
            name={collapsedA ? "chevron-down" : "chevron-up"}
            size={24}
            color="white"
          />
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

        <TouchableOpacity
          onPress={() => setCollapsedB(!collapsedB)}
          style={styles.lineItem}
        >
          <View style={styles.circleB}>
            <Text style={styles.circleText}>B</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.lineText}>Line B</Text>
          </View>
          <Ionicons
            name={collapsedB ? "chevron-down" : "chevron-up"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedB}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.collapsibleText}>Line B information</Text>
          </View>
        </Collapsible>

        <TouchableOpacity
          onPress={() => setCollapsedC(!collapsedC)}
          style={styles.lineItem}
        >
          <View style={styles.circleC}>
            <Text style={styles.circleText}>C</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.lineText}>Line C</Text>
          </View>
          <Ionicons
            name={collapsedC ? "chevron-down" : "chevron-up"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedC}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.collapsibleText}>Line C information</Text>
          </View>
        </Collapsible>

        <TouchableOpacity
          onPress={() => setCollapsedD(!collapsedD)}
          style={styles.lineItem}
        >
          <View style={styles.circleD}>
            <Text style={styles.circleText}>D</Text>
          </View>
          <View style={styles.lineInfo}>
            <Text style={styles.lineText}>Line D</Text>
          </View>
          <Ionicons
            name={collapsedD ? "chevron-down" : "chevron-up"}
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <Collapsible collapsed={collapsedD}>
          <View style={styles.collapsibleContent}>
            <Text style={styles.collapsibleText}>Line D information</Text>
          </View>
        </Collapsible>
      </ScrollView>
    </View>
  );
};

export default NearYou;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 20,
    height: '100%',
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
    // backgroundColor: '#2D2D2D'
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
    //   flex: 1,
    paddingHorizontal: 10,
  },
  linesHeader: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginLeft: 8,
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
    // marginBottom: 5,
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