import * as React from 'react';
import { List } from 'react-native-paper';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height; //667
let deviceWidth = Dimensions.get('window').width; //375

const AppIcon = () => {
  return (
    <Image
      source={require('../assets/circle-cross-lock-icon.png')}
      style={{height: deviceWidth / (375 / 110), width: deviceWidth / (375 / 137)}}
    />
  );
};

const styles = StyleSheet.create({});

export default AppIcon;
