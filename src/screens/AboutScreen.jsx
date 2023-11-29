import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>This is a simple to do list app</Text>
        <Text style={styles.text}>
          This app is suitable for everyone to use.
        </Text>
        <Text style={styles.text}>Author: Mobile fun</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
