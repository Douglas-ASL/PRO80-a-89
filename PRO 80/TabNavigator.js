import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      shifting={true}
      barStyle={{ backgroundColor: '#ffffff' }}
      activeColor="#FF6B6B"
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={RFValue(25)} />
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarLabel: 'Criar Postagem',
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" color={color} size={RFValue(25)} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

