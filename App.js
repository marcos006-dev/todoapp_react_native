import 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
// import styles from './src/assets/styles/styles';

import Home from './src/views/Home';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import tareas from './data/tasks.json';
import AddTask from './src/views/AddTask';
import Drawe from './src/views/Drawe';
import { Button } from 'react-native';

const Drawer = createDrawerNavigator();

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
  };

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          options={{
            headerLeft: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
          }}
        >
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
        <Drawer.Screen name="Drawe">
          {({ navigation }) => <Drawe />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
