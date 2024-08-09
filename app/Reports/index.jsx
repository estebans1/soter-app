import { View, Text, StyleSheet, SafeAreaView, TextInput, } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const Reports = () => {
  const onPressCancel =() => {
    router.push('(tabs)/feed')
    alert("Canceled")
  }
  const onPressPost =() => {
    router.push('(tabs)/feed')
    alert("Thank you for the report!")
  }
    const [text, onChangeTrain] = useState('');
    const [number, onChangeTrainSerial] = useState('');
    const [form, setForm] = useState({
      problem: '',
    })
  return (
    <LinearGradient colors={['#3D6876', '#D89734']} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.text}>Report a Problem</Text>
      <View style={styles.containerButton}>
        <CustomButton title="Cancel" onPress={onPressCancel}/>
        <CustomButton title="Post" onPress={onPressPost}/>
      </View>
      <View style={styles.containerNotepad}>
        <View style={styles.notepad}></View>
          <View style={styles.containerWrite}>
            <View style={styles.write}>
              <FormField
                placeholder="Report a problem"
                value={form.problem}
                handleChangeText={(e) => setForm({ ...form, problem: e })}
              />
            </View>
          </View>
          <View style={styles.inputContainer}> 
            <TextInput
              style={styles.input}
              onChangeText={onChangeTrain}
              value={text}
              placeholder='Train Line'
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeTrainSerial}
              value={number}
              keyboardType="numeric"
              placeholder='Train Serial #'
            />
          </View>
      </View>
    </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#1E1E1E",

  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: -550,
  },
  containerNotepad: {
    alignItems: 'center',
  },
  containerWrite:{
    alignItems:'center',
    position: 'absolute',
    marginTop: 50,
  },
  containerTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  text: {
    color: "#ED920B",
    textAlign: "top",
    fontSize: 52,
    fontStyle: "normal",
    fontWeight: 400,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 8 },
    textShadowRadius: 4,
    marginTop: 90,
    textAlign: "center",
  },
  text1:{
    textAlign: 'center',
    fontSize: 37,
    backgroundColor: "#207792",
    width: 140,
    height: 72,
    flexShrink: 0,

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
  write:{
    width: 350,
    height: 200,
    backgroundColor: "#f4fcff",
    alignItems: "center",
    borderRadius: 11,
    shadowColor: "000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  input: {
    height: 47,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#F7B655',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: -110,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
  }
});
export default Reports;