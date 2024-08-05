import { View, Text, StyleSheet } from 'react-native'
import * as SystemUI from 'expo-system-ui'
import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"; 


const _layout = () => {
  return (
   <Tabs>
        <Tabs.Screen
            name="index"
            options={{
                title: "Reports",
                fill: "#00ff00",
                headerShown: false,
                width: 377,
                height: 441,
                flexShrink: 0,
                
                
            }}
/>
<Tabs.Screen
            name="feed"
            options={{
                headerStyle:{
                    backgroundColor: '#1E1E1E',
                },
                title: "Home",
                // headerShown: false,
                // width: 377,
                // height: 441,
                flexShrink: 0,
            }}
/>
<Tabs.Screen
            name="destination"
            options={{
                title: "Destination",
                fill: "#00ff00",
                headerShown: false,
                // width: 377,
                // height: 441,
                // flexShrink: 0,

            }}
/>
<Tabs.Screen
            name="blank"
            options={{
                title: "Blank",
                fill: "red",
                // headerShown: false,
                // width: 377,
                // height: 441,
                // flexShrink: 0

            }}
/>
   </Tabs>
  )
}


export default _layout