import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import LoginButton from '../components/LoginButton';
// import FormField from '../components/FormField';
import { router, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import LogFormField from '../components/LogFormField';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = () => {
    router.push('feed')
  }

  return (
    <LinearGradient colors={['#3D6876', '#D89734']} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Safe Lines</Text>
      <View style={styles.form1}>
        <LogFormField
        title=""
        value={form.email}
        placeholder="Enter Email"
        handleChangeText={(value) => setForm({ ...form, email: value})}
        />
      </View>

      <View style={styles.form2}>
        <LogFormField
            title=""
            value={form.password}
            placeholder="Enter Password"
            handleChangeText={(value) => setForm ({...form, password: value})}
        />
      </View>
      <View style={styles.login}>
        <LoginButton title="Log in" onPress={onSignInPress}/>
      </View>
    </View>
    </LinearGradient>
  )
}
export default SignIn

const styles=StyleSheet.create ({
container: {
    flex: 1,
    // backgroundColor: '#1B5669',
    justifyContent: 'center',
  },
  text: {
    fontSize: 90,
    textAlign: 'center',
    fontFamily: 'marion-regular',
    color: '#2D9ABC'
  },
  form1: {
    justifyContent: 'center',
    marginHorizontal: 100,
    // alignItems:'center'
  },
  form2: {
    justifyContent: 'center',
    marginHorizontal: 100,
    paddingTop: 5,
  },
  login: {
    justifyContent: 'center',
    marginHorizontal: 150,
    borderRadius: 90,
  },
  Shield: {
    width: 50,
    resizeMode: 'contain'
  }

});