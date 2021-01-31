import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import MyLibraryScreen from '../screens/MyLibraryScreen';
import PremiumScreen from '../screens/PremiumScreen';
import SearchScreen from '../screens/SearchScreen';
import { BottomTabParamList, HomeParamList, MyLibraryParamList, PremiumParamList, SearchParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyLibrary"
        component={MyLibraryNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="my-library-music" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Premium"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="attach-money" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

      <HomeStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Album Screen' }}
      />
    </HomeStack.Navigator>
  );
};
const SearchStack = createStackNavigator<SearchParamList>();
const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: 'Search' }}
      />
    </SearchStack.Navigator>
  );
};

const MyLibraryStack = createStackNavigator<MyLibraryParamList>();
const MyLibraryNavigator = () => {
  return (
    <MyLibraryStack.Navigator>
      <MyLibraryStack.Screen
        name="MyLibraryScreen"
        component={MyLibraryScreen}
        options={{ headerTitle: 'My Library' }}
      />
    </MyLibraryStack.Navigator>
  );
};

const PremiumStack = createStackNavigator<PremiumParamList>();
const PremiumNavigator = () => {
  return (
    <PremiumStack.Navigator>
      <PremiumStack.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{ headerTitle: 'Spotify Premium' }}
      />
    </PremiumStack.Navigator>
  );
};
