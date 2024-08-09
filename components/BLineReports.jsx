import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import Collapsible from "react-native-collapsible";
import { TouchableOpacity } from "react-native-gesture-handler";

// components
import ReportCard from '../components/ReportCard';
import AddReport from '../components/AddReport'

const BLineReports = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold',}}>B Line Reports</Text>
        <AddReport/>
      </View>
      <View style={{ backgroundColor: "white", height: 1 }} />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
      <ReportCard />
    </ScrollView>
  );
};

export default BLineReports;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginTop: 10,
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
  }
});