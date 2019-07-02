import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import TabScreen from '../screens/Tab';
import TabBarButton from '../components/TabBarButton';

const App = createBottomTabNavigator(
  {
    Home: TabScreen,
    Dashboard: TabScreen,
    Settings: TabScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarButtonComponent: (props) => (
        <TabBarButton
          routeName={navigation.state.routeName}
          {...props}
        />
      )
    }),
    initialRouteName: 'Home',
  }
);

export default createAppContainer(App);
