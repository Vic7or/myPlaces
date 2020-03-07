import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Login from '../components/LoginScreen';
import Home from '../components/HomeScreen';
import Register from '../components/RegisterScreen';
import Upload from '../components/UploadSceen';
import Profile from '../components/ProfileScreen';

const MoviesTabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: () => (
        <Image
          source={require('../Images/galerie.jpg')}
          style={styles.icon}
        />
      ),
    },
  },
  Upload: {
    screen: Upload,
    navigationOptions: {
      tabBarIcon: () => (
        <Image
          source={require('../Images/icon_upload.png')}
          style={styles.icon}
        />
      ),
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarIcon: () => (
        <Image
          source={require('../Images/ic_favorite.png')}
          style={styles.icon}
        />
      ),
    },
  },
},
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true,
    },
  });

const LoginStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: MoviesTabNavigator,
    navigationOptions: {
      headerShown: false,
    },
  },
});

/*
const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favoris',
    },
  },
  FilmDetail: {
    screen: FilmDetail,
  },
});

const MoviesTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}
          />
        ),
      },
    },
    Upload: {
      screen: FavoritesStackNavigator,
      navigationOptions: {
        tabBarIcon: () => (
          <Image
            source={require('../Images/ic_favorite.png')}
            style={styles.icon}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
      showLabel: false,
      showIcon: true,
    },
  },
);
*/
const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(LoginStackNavigator);
