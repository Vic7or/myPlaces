import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
    navigation: NavigationStackProp;
};

class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigation: { navigate } } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Page</Text>
        <Button
          title="Go to profile page"
          onPress={() => navigate('Profile', { name: 'Victor' })}
        />
      </View>
    );
  }
}

export default HomeScreen;
