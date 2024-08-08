import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

const ReportCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.header}>
        <Image
          source={require("../assets/images/patrick.png")}
          style={styles.patrick}
        />
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 16,
              marginLeft: 15,
              marginTop: 4,
              fontStyle: "normal",
            }}
          >
            Awareness
          </Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <ScrollView>
          <Text style={styles.text2}>
            {" "}
            C Line train broke down for the next couple hours, just to let you
            guys know.{" "}
          </Text>
        </ScrollView>
      </View>
      <View style={{ flex: 0.2 }}>
        <Image
          source={require("../assets/images/Shield.png")}
          style={styles.shield}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.line2} />
        <Text style={styles.text1}> Leave a reply</Text>
      </View>
    </View>
  );
};

export default ReportCard;

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        height: 200,
        width: 370,
        marginBottom: 10,
        borderRadius: 30,
        padding: 20,
        marginTop: 10,
        backgroundColor: '#F89F18',
        margin: 'auto'
        
    },
    line: {
        position: 'absoulte',
        top: '25%', // Position the line in the middle vertically
        left: 0,
        right: 0,
        width: '100%',
        borderBottomWidth: 2, // Thickness of the line
        borderBottomColor: 'black', // Color of the line
        transform: [{ translateY: -1 }] 
    },
    line2: {
        position: 'absoulte',
        top: '5%', // Position the line in the middle vertically
        left: 0,
        right: 0,
        width: '100%',
        borderBottomWidth: 2, // Thickness of the line
        borderBottomColor: 'black', // Color of the line
        transform: [{ translateY: -1 }] 
    },
    header: {
        flexDirection: "row",
        // color: 'white',
        // marginBottom: 10
    },
    patrick:{
        // resizeMode:'contain',
        width: 36,
        height: 30,
        borderRadius: 256,
        borderColor: 'black',
        borderWidth: 2
    },
    text2: {
        color:'white',
        fontWeight: 200,
        fontSize: 16,
        marginTop: 10,
    },
    text1: {
        color:'white',
        marginTop: 10,
        marginRight: 240,
    },
    container1: {
        backgroundColor: 'black',
        marginLeft: 65,
        borderRadius: 5,  
        height: 30,
        width: 98,
        
        // marginTop: -15,                                                                    
    },
    text: {
        color: '#2DAE4A',
        fontSize: 24,
        textAlign: 'center',
        // fontWeight: 700,
    
    },

    shield: {
        resizeMode:'contain',
        marginLeft: 290,
        marginTop: -37,


    },
    bottomContainer: {
        // marginTop: -2,
        fontSize: 20,
        alignItems: 'center',
        // backgroundColor: 'black',
        // marginRight: 200,
        alignContent: 'space-between'
        
    }
})
