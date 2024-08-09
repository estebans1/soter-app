import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, secureTextEntry }) => {
  return(
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
    height: 200,
    width: 350,
    textAlign: 'left',
    paddingBottom: 160,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f4fcff',
  },
});

export default FormField
