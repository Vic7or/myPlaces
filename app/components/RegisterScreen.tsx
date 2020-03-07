import React from 'react';
// import { NavigationStackProp } from 'react-navigation-stack';
import {
  Text, StyleSheet, View, TextInput, Image,
} from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDPT7iW5MEsmrib98dSAhE2AYhj4tIKi4g',
  authDomain: 'myplaces-70bb2.firebaseapp.com',
  databaseURL: 'https://myplaces-70bb2.firebaseio.com',
  storageBucket: 'myplaces-70bb2.appspot.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  Register = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Compte crée');
        this.props.navigation.navigate('Login');
      })
      .catch(() => {
        alert('Wrong format of email or password');
      });
  };

  render() {
  
    // const { navigation: { navigate } } = this.props;
    const { email, password } = this.state;
    const splash = require('../../assets/splash.png/');
    return (
      <View style={styles.Login_View}>
        <View style={styles.View_Login_Logo}>
          <Image
            style={styles.Login_Logo}
            source={splash}
          />
        </View>
        <TextInput
          style={styles.Login_TextInput}
          placeholder="Email"
          autoCompleteType="email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(emails) => this.setState({ email: emails })}
        />
        <TextInput
          style={styles.Login_TextInput}
          autoCapitalize="none"
          placeholder="Password"
          autoCorrect={false}
          autoCompleteType="password"
          secureTextEntry
          onChangeText={(passwords) => this.setState({ password: passwords })}
        />
        <Button
          style={styles.Signin_Button}
          onPress={() => this.Register(email, password)}
        >
          <Text>Register</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Login_View: {
    flex: 1,
    backgroundColor: '#3A3D58',
  },
  View_Login_Logo: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  Login_Logo: {
    width: 150,
    height: 150,
  },
  Login_TextInput: {
    backgroundColor: '#3A3D58',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5,
  },
  Signin_Button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 5,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: '#3A3D58',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Register_Opacity: {
    marginTop: 10,
    height: 30,
  },
  Register_Text: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
