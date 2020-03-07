import React from 'react';
// import { NavigationStackProp } from 'react-navigation-stack';
import {
  Text, StyleSheet, View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { NavigationStackProp } from 'react-navigation-stack';


const config = {
  apiKey: 'AIzaSyDPT7iW5MEsmrib98dSAhE2AYhj4tIKi4g',
  authDomain: 'myplaces-70bb2.firebaseapp.com',
  databaseURL: 'https://myplaces-70bb2.firebaseio.com',
  projectId: 'myplaces-70bb2',
  storageBucket: 'myplaces-70bb2.appspot.com',
  messagingSenderId: '747745640732',
  appId: '1:747745640732:web:c3aeac943259bd757bbad9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


type Props = {
    navigation: NavigationStackProp;
};

class ProfileScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }

  WriteInFirebase = async (uid, url, name, description) => {
    firebase.database().ref('users/' + 'fdgdf').set({
      name: name,
      description: description,
      uid: uid,
      url :  "data:image/png;base64,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",
    });
  };
  
  GetInFirebase = async (uid, url, name, description) => {
    firebase.database().ref('users/' + 'fdgdf').set({
      name: name,
      description: description,
      uid: uid,
      url :  "data:image/png;base64,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",
    });
  };

  render() {
  let user = this.props.navigation.state.params.User;
    return (
      <View style={styles.Upload_View}>
        <Text>{user.email}</Text>
      <Text style={styles.Upload_title}>Profile</Text>
      <TextInput
        style={styles.Login_TextInput}
        autoCapitalize="none"
        placeholder="Nom"
        autoCorrect={false}
        onChangeText={(passwords) => this.setState({ titre: passwords })}
      />
        <TextInput
        style={styles.Login_TextInput}
        autoCapitalize="none"
        placeholder="Description"
        autoCorrect={false}
        onChangeText={(passwords) => this.setState({ description: passwords })}
      />
      <Button
        style={styles.Upload_Button}
        onPress={() => this.WriteInFirebase("blab","blab","blab","blab",)}
      >
        <Text>Update profile</Text>
      </Button>
    </View>
  );
}
}

const styles = StyleSheet.create({
Upload_View: {
  flex: 1,
  backgroundColor: '#3A3D58',
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
Upload_title: {
  marginTop: 40,
  marginBottom: 40,
  fontSize: 25,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
},
Upload_Button: {
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
Media_Button: {
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
Register_Text: {
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
},
});

export default ProfileScreen;
