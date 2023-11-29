import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TodoForm = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('src/data/tasks.json')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const handleAddTask = () => {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    setTask(randomTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput style={styles.input} value={task} />
      <View style={styles.buttonContainer}>
        <Button title="Generate Random Task" onPress={handleAddTask} />
        <Button
          title="Add Task"
          onPress={() => navigation.navigate('About', {task})}
        />
      </View>
    </View>
  );
};

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
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodoForm;
