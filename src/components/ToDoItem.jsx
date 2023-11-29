import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function ToDoItem({item, index, deleteTask}) {
  return (
    <TouchableOpacity onPress={() => deleteTask(index)}>
      <View style={styles.container}>
        <Text>{item}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#eee',
  },
});
