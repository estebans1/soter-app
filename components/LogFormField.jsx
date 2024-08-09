import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const LogFormField = ({ title, value, placeholder, handleChangeText, secureTextEntry }) => {
  return (
    <View>
    {title && <Text>{title}</Text>}
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={handleChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor='#7b7b8b'
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    title: {
      marginBottom: 5,
      color: '#ED920B',
    },
    input: {
      height: 40,
      width: 230,
      textAlign: 'left',
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      backgroundColor: '#f4fcff',
    },
  });

export default LogFormField