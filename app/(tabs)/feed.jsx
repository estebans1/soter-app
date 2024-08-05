import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import Post from '../../components/Post'
import React, {useState} from 'react'
import Dropdown from '../../components/Dropdown'
import Post2 from '../../components/Post2'
import Post3 from '../../components/Post3'
import Post4 from '../../components/Post4'
import { Ionicons } from "@expo/vector-icons"; 
import ReportButton from '../../components/ReportButton'
import { router } from 'expo-router'


const Feed = () => {
  return (
        <View style={styles.containerPost}>
          <View style={styles.container1}>
             <ReportButton
              title="+ Report"
            onPress={() => router.push('Reports')}
             />
            <Text style={styles.label}></Text>
          {/* <Dropdown>
          </Dropdown> */}
        <ScrollView>
        <Post></Post>
        <Post2></Post2>
        <Post3></Post3>
        <Post4></Post4>
        </ScrollView>
          </View>
        </View>


  )
}

export default Feed

const styles = StyleSheet.create({    
    containerPost: {
    flex: 1,
    // marginTop: 10,
    // alignItems: 'center',
    backgroundColor: "#1E1E1E",
    },
    container1: {
    // backgroundColor: 'black'
    // alignItems: 'flex-end'
    // justifyContent: "flex-end"
    }
})