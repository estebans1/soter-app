import React, { useState } from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'


const _layout = () => {
  return (
   <Tabs>
    <Tabs.Screen
        name="feed"
        options={{
            headerShown: false,
            headerStyle:{
                backgroundColor: '#1E1E1E',
            },
            title: "Feed",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="newspaper-outline" color={color} size={size} />
            ),
            flexShrink: 0,
        }}
    />

    <Tabs.Screen
        name="destination"
        options={{
            title: "Directions",
            fill: "#00ff00",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="map-outline" color={color} size={size} />
            ),
        }}
    />
    </Tabs>
  )
}


export default _layout