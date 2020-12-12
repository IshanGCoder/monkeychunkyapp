import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import {Audio} from 'expo-av';

export default class PhonicSoundButton extends React.Component {
  playSound = async soundChunk => {
    var soundLink = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' + soundChunk + '.mp3'
    await Audio.Sound.createAsync({uri: soundLink}, {shouldPlay: true})
  }
  render() {
    return(
      <TouchableOpacity style = {styles.chunkButton} onPress = {() => {this.playSound(this.props.soundChunk)}}>
      <Text style = {styles.displayText}>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  chunkButton: {
   fontSize: 30,
   fontWeight: 'bold',
   textAlign: 'center',
  },
    displayText: {
    textAlign: 'center',
    fontSize: 50,
    marginTop: 30
  }
})