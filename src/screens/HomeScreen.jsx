import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {ToDoList} from '../components/ToDoList';
import {ToDoForm} from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

export default function HomeScreen() {
  const [tasks, setTasks] = React.useState([
    {text: 'Learn React Native', isDone: false},
    {text: 'Make a to do app', isDone: false},
    {text: 'Learn React Navigation', isDone: false},
  ]);

  const addTask = text => {
    const newTasks = [...tasks, {text}];
    setTasks(newTasks);
  };

  const deleteTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>To Do List</Text>
        <ToDoForm addTask={addTask} />
        <ToDoList tasks={tasks} deleteTask={deleteTask} />

        <Button
          title="Go to About"
          onPress={() => navigation.navigate('AboutScreen')}
        />
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
});
