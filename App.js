import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AddTask from './src/views/AddTask';
import Home from './src/views/Home';

import tareas from './data/tasks.json';

const Stack = createNativeStackNavigator();
const App = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(tareas);
  }, []);
  const handleChangeCheckbox = (taskSelected, isChecked) => {
    console.log(taskSelected);
    const newTasks = tasks.map((task) => {
      if (task.id === taskSelected.id) {
        task.completed = isChecked;
      }
      return task;
    });

    setTasks(newTasks);

    console.log(...newTasks);
    // console.log(...newTasks);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <Home
              tasks={tasks}
              handleChangeCheckbox={handleChangeCheckbox}
              navigation={navigation}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="AddTask">
          {({ navigation }) => (
            <AddTask name="AddTask" navigation={navigation} addTask={addTask} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
