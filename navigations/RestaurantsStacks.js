
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'

const Stack = createStackNavigator
export default function RestaurantsStacks() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name= "Restaurantes"
            component = {Restaurants}
            options = {{ title : "Restaurantes " }}
        />
    </Stack.Navigator>     
  )
}