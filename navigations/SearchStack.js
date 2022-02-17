
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'
import Search from '../screens/Search'

const Stack = createStackNavigator
export default function SearchStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name= "Search"
            component = {Search}
            options = {{ title : "Buscar " }}
        />
    </Stack.Navigator>     
  )
}