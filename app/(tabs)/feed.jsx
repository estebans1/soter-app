import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import Post from '../../components/Post'
import React, {useState} from 'react'
import Dropdown from '../../components/Dropdown'
import Post2 from '../../components/Post2'
import Post3 from '../../components/Post3'
import Post4 from '../../components/Post4'
import { Ionicons } from "@expo/vector-icons"; 
import ReportButton from '../../components/ReportButton'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'


const Feed = () => {
  const router = useRouter();

  return (
    <LinearGradient colors={['#3D6876', '#D89734']} style={styles.container}>
        <View style={styles.button}>
          <ReportButton
            title="+ Report"
            onPress={() => router.push('Reports')}
          />
        </View>
            <Text style={styles.label}></Text>
          {/* <Dropdown>
          </Dropdown> */}
        <ScrollView>
        <Post></Post>
        <Post2></Post2>
        <Post3></Post3>
        <Post4></Post4>
        </ScrollView>
    </LinearGradient>
  )
}
///Users/txthackathon/Desktop/soter-app/app/(tabs)/index.jsx

export default Feed

const styles = StyleSheet.create({    
    container: {
      flex: 1,
    },
})