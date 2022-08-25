import { Input, Button } from '@rneui/themed';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import styles from '../assets/styles/styles';

function AddTask({ addTask, navigation }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = (textTask) => {
    // console.log(textTask);
    setNewTask(textTask);
  };
  const handleSubmit = () => {
    // e.preventDefault();
    // console.log();
    const newTaskObject = {
      id: Math.random().toString(),
      name: newTask,
      completed: false,
    };
    addTask(newTaskObject);
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.buttonWidth}>
          <Input
            name="newTask"
            placeholder="Ingrese un tarea"
            value={newTask}
            onChangeText={handleChange}
          />

          <Button color="secondary" size="lg" onPress={handleSubmit}>
            <Text>Agregar Tarea</Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

AddTask.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
  addTask: PropTypes.func.isRequired,
};
export default AddTask;
