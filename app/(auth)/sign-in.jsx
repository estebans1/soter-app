import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import LoginButton from '../../components/LoginButton';
import FormField from '../../components/FormField';
import { router, useRouter } from 'expo-router';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = () => {
    router.push('(tabs)')
  }

  return (
    <View style={styles.container}>
         {/* <View style={styles.notepad}></View> */}
      <Text style={styles.text}>Welcome to Soter</Text>
      <FormField
        title=""
        value={form.email}
        placeholder="Enter your email"
        handleChangeText={(value) => setForm({ ...form, email: value})}
      />
      {/* <FormField
        title="Password"
        value={form.password}
        placeholder={(value) => setForm ({...form, password: value})}
        secureTextEntry
      /> */}
      <LoginButton title="Sign In" onPress={onSignInPress}/>
    </View>
  )
}
export default SignIn

const styles=StyleSheet.create ({
container: {
    flex: 1,
    backgroundColor: '#1B5669',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
  },
  text: {
    fontSize: 50,
  },
  notepad: {
    width: 377,
    height: 411,
    backgroundColor: '#398097',
    alignItems: "center",
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});