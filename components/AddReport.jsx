import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const AddReport = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>+ Report</Text>
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