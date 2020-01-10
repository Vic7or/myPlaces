// import React from 'react';
// import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/components/HomeScreen';
import ProfileScreen from './app/components/ProfileScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
},
{
  initialRouteName: 'Home',
});

const App = createAppContainer(MainNavigator);

export default App;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}
*/
