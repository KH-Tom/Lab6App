import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoForm from '../components/ToDoForm';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TodoForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
