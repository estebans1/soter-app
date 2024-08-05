import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useRouter } from 'expo-router'

const index = () => {
    const router = useRouter();

  return (
    <SafeAreaView>
        <View>
            <Text style={styles.welcome}>Welcome to Soter</Text>
            <CustomButton
                title='Go to Log In'
                onPress={() => router.push('sign-in')}
                // style={styles.buttonStyle}
            />
        </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    buttonStyle: {

    }
})