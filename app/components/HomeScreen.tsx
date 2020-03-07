import React from 'react';
// import { NavigationStackProp } from 'react-navigation-stack';
import {
  Text, StyleSheet, View, TextInput, Image, TouchableOpacity,
} from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';

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


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer',
    ];
  }

  _WriteInFirebase = async (user, url, titre, description) => {
    const res = firebase.storage().refFromURL('gs://myplaces-70bb2.appspot.com/images/test-image');
    console.log(res);
    firebase.database().ref('users/' + 'fdgdf').set({
      description: 'Ndkdb',
      id: '7IfAXVJhoBb059Me54podAnkwdD31 574 197 162 157',
      imagePath: 'https://firebasestorage.googleapis.com/v0/b/myplaces-70bb2.appspot.com/o/7IfAXVJhoBb059Me54podAnkwdD3%2F1%E2%80%AF574%E2%80%AF197%E2%80%AF162%E2%80%AF157?alt=media&token=2f8bb6f6-6c15-489e-93a6-9d9ea057df21',
      lat: 43.5350007,
      lng: 5.4685991,
      title: 'Gjdj',
    });
  };

  _UploadFirebase = async () => {
    const result = await ImagePicker.launchCameraAsync();
    // let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, 'test-image')
        .then(() => {
          console.log('succes');
        })
        .catch((error) => {
          console.log('fail');
        });
    }
  };

  _MediaUploadFirebase = async () => {
    // let result = await ImagePicker.launchCameraAsync();
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, 'test-image')
        .then(() => {
          console.log('succes');
        })
        .catch((error) => {
          console.log('fail');
        });
    }
  };

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const ref = firebase.storage().ref().child(`images/${imageName}`);
    return ref.put(blob);
  };

  render() {
    // const User = this.props.navigation.getParam('User')
    return (
      <View style={styles.Upload_View}>
        <Text style={styles.Upload_title}>Upload your Images</Text>
        <TextInput
          style={styles.Login_TextInput}
          autoCapitalize="none"
          placeholder="Titre"
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
          onPress={this._UploadFirebase}
        >
          <Text>Take a picture</Text>
        </Button>
        <Button
          style={styles.Media_Button}
          onPress={this._MediaUploadFirebase}
        >
          <Text>Image from Galeri</Text>
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

export default HomeScreen;
