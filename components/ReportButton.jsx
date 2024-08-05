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
      backgroundColor: 'red', // Default button background color
    //   paddingVertical: 12,
    //   paddingHorizontal: 0,
      borderRadius: 16,
      marginVertical: 10,
      marginHorizontal: 170,
    },
    text: {
      color: 'black', // Default text color
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  });
  
  export default CustomButton;