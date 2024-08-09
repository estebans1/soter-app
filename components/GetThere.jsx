import React, { useRef, useState }from 'react';
import { Image, StyleSheet, View, Text, ScrollView, Alert, TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import DirectionButton from '../components/DirectionButton'

import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BLineReports from "../components/BLineReports";

const GetThere = () => {

    const [isOpen, setIsOpen] = useState(false);

    //bottom Sheet Modal Ref
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["78"];

    const handleBottomSheet = () => {
      bottomSheetModalRef.current?.present();
      setIsOpen(true);
    };

    const router = useRouter();
    return(
    <View style={styles.container}>
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
        title={"USC"}
        description={"University of Southern California"}
      />
    </MapView>

    

    {/* // this is the Train Line Section */}
    <BottomSheetModalProvider>
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.linesHeader}>Directions</Text>
      <LinearGradient colors={['#76967C', '#42837E']} style={styles.box1}>
        <Image source={require('../assets/images/RouteImg.png')} style={styles.image1}/>
        <Text style={styles.text1}>Estimated time of arrival: 10:48am</Text>
        <DirectionButton onPress={handleBottomSheet} style={styles.textBox} title="See Reports"/>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => setIsOpen(false)}
          handleIndicatorStyle={{ backgroundColor: "white", width: 100}}
          backgroundStyle={{ backgroundColor: "#3D6876", borderRadius: 20 }}
        >
          <BLineReports />
        </BottomSheetModal>
        <View style={styles.line}/>
      </LinearGradient>

      <LinearGradient colors={['#76967C', '#42837E']} style={styles.box1}>
        <Image source={require('../assets/images/RouteImg2.png')} style={styles.image2}/>
        <Text style={styles.text2}>Estimated time of arrival: 10:49am</Text>
        <DirectionButton onPress={handleBottomSheet} style={styles.textBox} title="See Reports"/>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => setIsOpen(false)}
          handleIndicatorStyle={{ backgroundColor: "white", width: 100}}
          backgroundStyle={{ backgroundColor: "#3D6876", borderRadius: 20 }}
        >
          <BLineReports />
        </BottomSheetModal>
        <View style={styles.line}/>
      </LinearGradient>

      <LinearGradient colors={['#76967C', '#42837E']} style={styles.box1}>
        <Image source={require('../assets/images/RouteImg3.png')} style={styles.image3}/>
        <Text style={styles.text3}>Estemiated time of arrival: 11:00am</Text>
        <DirectionButton onPress={handleBottomSheet} style={styles.textBox} title="See Reports"/>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onDismiss={() => setIsOpen(false)}
          handleIndicatorStyle={{ backgroundColor: "white", width: 100}}
          backgroundStyle={{ backgroundColor: "#3D6876", borderRadius: 20 }}
        >
          <BLineReports />
        </BottomSheetModal>
        <View style={styles.line}/>
      </LinearGradient>

    </ScrollView>
    </BottomSheetModalProvider>
    </View>
    );
};

export default GetThere;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
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
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 10,
    color: 'white'
  },
  box1: {
    display: 'flex',
    height: 164,
    width: 396,
    marginBottom: 10,
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
    backgroundColor: '#42837E',
    margin: 'auto',
  },
  line: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#F1CA74',
    transform: [{ translateY: -1 }]
  },
  // textBox: {
  //   position: 'absolute',
  //   bottom: 5,
  //   left: 0,
  //   right: 0,
  //   textAlign: 'center',
  //   fontSize: 24,
  //   color: "#29CC00",
  // },
  text1: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white'
  },
  text2: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  text3: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
  },
  image1: {
    width: 300,
    resizeMode: 'contain',
    // flexShrink: 0,
  },
  image2: {
    width: 300,
    resizeMode: 'contain',
  },
  image3: {
    width: 300,
    resizeMode: 'contain',
  }
});