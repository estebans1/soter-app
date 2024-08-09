import { TouchableOpacity, Text, StyleSheet } from "react-native"
import React from 'react'
const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
    return (
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'transparent', // Default button background color
      paddingVertical: 20,
      paddingHorizontal: 24,
      borderRadius: 16,
      marginVertical: 10,
    },
    text: {
      color: '#29CC00', // Default text color
      fontSize: 24,
      textAlign: 'center'
    },
  });
  
  export default CustomButton;