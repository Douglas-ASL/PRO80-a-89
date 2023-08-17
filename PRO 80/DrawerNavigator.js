import React, { Component } from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

class DrawerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userTheme: 'dark', // Simulando um tema preferido do usuário
    };
  }

  componentDidMount() {
    // Simulação de consulta ao banco de dados para obter o tema preferido do usuário
    // Atualizar this.state.userTheme com o tema obtido do banco de dados
  }

  render() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            {/* ... Seu conteúdo personalizado do drawer */}
          </DrawerContentScrollView>
        )}
        drawerContentOptions={{
          theme: this.state.userTheme, // Usar o tema preferido do usuário
        }}
      >
        <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNavigation;
