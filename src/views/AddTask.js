import { Input, Button } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';
import styles from '../assets/styles/styles';

const AddTask = ({ addTask, navigation }) => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (textTask) => {
    console.log(textTask);
    setNewTask(textTask);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log();
    const newTaskObject = {
      id: Math.random().toString(),
      name: newTask,
      completed: false,
    };
    addTask(newTaskObject);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.buttonWidth}>
      <Input
        name="newTask"
        placeholder="Ingrese un tarea"
        value={newTask}
        onChangeText={handleChange}
      />

      <Button color="secondary" size="lg" onPress={handleSubmit}>
        Agregar Tarea
      </Button>
    </View>
  );
};

export default AddTask;
