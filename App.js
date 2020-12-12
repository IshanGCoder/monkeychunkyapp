import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb'
import PhonicSoundButton from './phonicsoundbutton'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {text: '', displayText: '', chunks: [], phones: []}
    
  }
  render() {
    return (
      <View style={styles.container}>
      <Header
      backgroundColor = {'blue'}
      centerComponent = {{text: "Monkey Chunky", style:{color: 'white', fontSize: 25}}}
      />
      <Image source = {{uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}} style = {styles.imageIcon}/>
      <TextInput
      onChangeText = {(text) => {this.setState({text:text})}}
      value = {this.state.text}
      style = {styles.inputBox}
      placeholder = 'Enter Word Here'
      />
      <TouchableOpacity
      onPress = {() => {this.setState({displayText: this.state.text, chunks: db[this.state.text].chunks, phones: db[this.state.text].phones})}} style = {styles.button}>
      <Text style = {styles.buttonText}>Go</Text>
      </TouchableOpacity>
      <View>
      {this.state.chunks.map((item, index) => {
        return(<PhonicSoundButton wordChunk = {this.state.chunks[index]} soundChunk = {this.state.phones[index]}></PhonicSoundButton>)
      })}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    border: 'solid',
    borderWidth: 4,
    marginTop: 30,
    height: 50,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    fontSize: 30
  },
  button: {
    alignSelf: 'center',
    padding: 20,
    border: 'solid',
    borderRadius: 100,
    backgroundColor: '#00FF00',
    marginTop: 15
  },
  buttonText: {
   fontSize: 30,
   fontWeight: 'bold',
   textAlign: 'center',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 30
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 0
  }
});
