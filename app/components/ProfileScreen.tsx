import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

type Props = {
    navigation: NavigationStackProp;
};


class ProfileScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', 'inconnu');
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          {`${name}'s Profile Page`}
        </Text>
        <Button
          title="Go to home page"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default ProfileScreen;
