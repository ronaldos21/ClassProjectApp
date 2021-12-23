import * as React from 'react';
import { List } from 'react-native-paper';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

let deviceHeight = Dimensions.get('window').height; //667
let deviceWidth = Dimensions.get('window').width; //375

const PassIcon = () => {
  return (
    <Image
      source={require('../assets/lock-icon-pixilart.png')}
      style={styles.imageLayout}
    />
  );
};

const styles = StyleSheet.create({
  imageLayout: {
    height: deviceWidth / (370 / 50),
    width: deviceWidth / (370 / 50),
    marginRight: 5,
  },
});

export default PassIcon;
