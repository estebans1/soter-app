import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const AddReport = () => {
  const router = useRouter();
  return (
    <TouchableOpacity style={styles.button}>
      <Text onPress={() => router.push('Reports')} 
        style={styles.text}>+ Report
      </Text>
    </TouchableOpacity>
  )
}

export default AddReport

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})