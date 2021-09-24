import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

interface TabDetails {
    name: string,
    component: React.ComponentType,
    iconName: ({ focused }: { focused: Boolean }) => string,
}

export default function Navigator({ tabs }: { tabs: TabDetails[] }) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = tabs.find(t => t.name === route.name)?.iconName({ focused });
              return iconName ? <Ionicons name={iconName} size={size} color={color} /> : null;
            },
          })}
        >
          {tabs.map(({ name, component }, index) => (
            <Tab.Screen key={index} name={name} component={component} />
          ))}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };