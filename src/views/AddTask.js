import { Input, Button } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';

const AddTask = () => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    console.log(e.target.text);
    setNewTask(e.target.text);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(newTask);
  };

  return (
    <View>
      <Input
        name="newTask"
        placeholder="Ingrese un tarea"
        value={newTask}
        onChange={(valor) => handleChange(valor)}
      />

      <Button color="secondary" size="lg" onPress={handleSubmit}>
        Agregar Tarea
      </Button>
    </View>
  );
};

export default AddTask;
