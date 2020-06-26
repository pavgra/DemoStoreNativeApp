
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Catalog from './components/Catalog';
import ShoppingCart from './components/ShoppingCart';

const tabs = [
  {
    name: 'Catalog',
    component: Catalog,
    iconName: ({ focused }: { focused: Boolean }) => focused ? 'ios-list-box' : 'ios-list',
  },
  {
    name: 'Cart',
    component: ShoppingCart,
    iconName: ({ focused }: { focused: Boolean }) => 'ios-cart',
  },
];

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = tabs.find(t => t.name === route.name)?.iconName({ focused });
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        {tabs.map(({ name, component }, index) => (
          <Tab.Screen key={index} name={name} component={component} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;
