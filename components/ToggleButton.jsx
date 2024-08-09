import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ToggleButton = ({onPress, showGetThere}) => {
    console.log('onPress type:', typeof onPress);
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
            {showGetThere ? 'Go' : 'Go'}
        </Text>
    </TouchableOpacity>
  );
};

export default ToggleButton

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'black',
      paddingVertical: 5,
      marginHorizontal: 350,
      borderRadius: 30,
      alignItems: 'center',
      marginRight: 20,
      // marginVertical: 3,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });