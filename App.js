import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AddTask from './src/views/AddTask';
import Home from './src/views/Home';

import tareas from './data/tasks.json';
import Pruebas from './src/views/Pruebas';

const Drawer = createDrawerNavigator();

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(tareas);
  }, []);
  const handleChangeCheckbox = (taskSelected, isChecked) => {
    // console.log(taskSelected);
    const newTasks = tasks.map((task) => {
      const taskEdit = task;

      if (taskEdit.id === taskSelected.id) {
        taskEdit.completed = isChecked;
      }

      return taskEdit;
    });

    setTasks(newTasks);

    // console.log(...newTasks);
    // console.log(...newTasks);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#9AC4F8',
          },
          headerTintColor: 'white',
          headerBackTitle: 'Back',
          animationEnabled: false,
        }}
      >
        <Drawer.Screen name="Home">
          {({ navigation }) => (
            <Home
              tasks={tasks}
              handleChangeCheckbox={handleChangeCheckbox}
              navigation={navigation}
            />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="AddTask">
          {({ navigation }) => (
            <AddTask name="AddTask" navigation={navigation} addTask={addTask} />
          )}
        </Drawer.Screen>
        <Drawer.Screen name="Pruebas">
          {({ navigation }) => (
            <Pruebas name="Pruebas" navigation={navigation} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
