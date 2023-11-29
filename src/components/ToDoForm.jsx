import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

export function ToDoForm({addTask}) {
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
});
