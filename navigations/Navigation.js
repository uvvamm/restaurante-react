
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Restaurants from '../screens/Restaurants'
import Favorites from '../screens/Favorites'
import TopRestaurants from '../screens/TopRestaurants'
import Search from '../screens/Search'
import Account from '../screens/Account'
import RestaurantsStacks from './RestaurantsStacks'
import FavoritesStack from './FavoritesStack'
import SearchStack from './SearchStack'
import AccountStacks from './AccountStacks'


const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
   <NavigationContainer>
       <Tab.Navigator>
           <Tab.Screen name="restaurants"
                        component = {RestaurantsStacks}
                        options = {{ title : "Restaurantes" }}
            />
            <Tab.Screen name="favorites"
                        component={FavoritesStack}//componente o pagina
                        options = {{ title : "Favoritos" }}//nombre que aparece en el nav bar
            />
            <Tab.Screen name="top-restaurants"
                        component={TopRestaurants}
                        options = {{ title : "Top 5" }}
            />
            <Tab.Screen name="search"
                        component={SearchStack}
                        options = {{ title : "Buscar" }}
            />
            <Tab.Screen name="account"
                        component={AccountStacks}
                        options = {{ title : "Cuenta" }}
            />
       </Tab.Navigator>
   </NavigationContainer>
  )
}