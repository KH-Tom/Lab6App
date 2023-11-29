import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Authur: Mobile fun</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Footer;
