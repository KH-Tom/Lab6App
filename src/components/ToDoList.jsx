import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function ToDoList({tasks, deleteTask}) {
  return (
    <View>
      {tasks.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => deleteTask(index)}>
          <Text>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
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
