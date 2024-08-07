import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useRouter } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'

const index = () => {
    const router = useRouter();

  return (
    <LinearGradient colors={['#3D6876', '#D89734']} style={styles.container}>
        <View>
            <Text style={styles.welcome}>Welcome to Soter</Text>
            <CustomButton
                title='Go to Log In'
                onPress={() => router.push('sign-in')}
                // style={styles.buttonStyle}
            />
        </View>
    </LinearGradient>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 64,
        color: '#2D9ABC',
        textAlign: 'center'
    }
})