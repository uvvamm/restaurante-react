
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Restaurants from '../screens/Restaurants'
import Search from '../screens/Search'

const Stack = createStackNavigator
export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name= "top-restauransts"
            component = {Search}
            options = {{ title : "Los mejores restaurantes " }}
        />
    </Stack.Navigator>     
  )
}