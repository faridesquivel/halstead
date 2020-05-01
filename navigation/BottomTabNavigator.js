import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import FileLectureScreen from '../screens/FileLectureScreen';
import ListScreen from '../screens/ListScreen';
import MetricsScreen from '../screens/MetricsScreen';
import ShowCodeScreen from '../screens/ShowCodeScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="File"
        component={FileLectureScreen}
        options={{
          title: 'Archivo',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="insert-drive-file" />,
        }}
      />
      <BottomTab.Screen
        name="Code"
        component={ShowCodeScreen}
        options={{
          title: 'Código',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="code" />,
        }}
      />
      <BottomTab.Screen
        name="Metrics"
        component={MetricsScreen}
        options={{
          title: 'Métricas',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="assessment" />,
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'Saved',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Métricas de software';
    case 'File':
      return 'Cargar un archivo';
    case 'Code':
      return 'Código';
    case 'Metrics':
      return 'Métricas del código';
    case 'List':
      return 'Métricas guardadas';
  }
}
