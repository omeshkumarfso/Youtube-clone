import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './android/app/src/screens/Home';
import Search from './android/app/src/screens/Search';
import VideoPlayer from './android/app/src/screens/VideoPlayer';
import Explore from './android/app/src/screens/Explore';
import Subscribe from './android/app/src/screens/Subscribe';
import {reducer} from './android/app/src/reducers/reducer'

import {Provider} from 'react-redux';
import {createStore} from 'redux'

const store = createStore(reducer);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({color}) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home' ;
        } else if (route.name === 'Explore') {
          iconName = 'explore' ;
        } else if(route.name === 'Subscribe') {
          iconName = 'subscriptions' ;
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={30} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      showIcon: true
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subscribe" component={Subscribe} />
    </Tab.Navigator>
  );
}
export default function App() {

return (
  <Provider store ={store}>
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="roothome" component={RootHome} />
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoPlayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>

    </View>
    </Provider>
  )
}