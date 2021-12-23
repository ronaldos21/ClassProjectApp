import * as React from 'react';
import { List } from 'react-native-paper';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import AppIcon from './AppIcon';

let deviceHeight = Dimensions.get('window').height; //667
let deviceWidth = Dimensions.get('window').width; //375

const Header = () => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>PassManager</Text>
      <AppIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    //contains title, logo
    marginTop: deviceHeight / 5, //30,
    alignItems: 'center',
  },
  title: {
    //fontSize: 25,
    fontSize: deviceWidth / (375 / 55),
    fontFamily: 'Charter', //Impact
    fontWeight: 'bold',
  },
});

export default Header;
