const Routes = () => {
  return (
    <>
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
    </>
  );
};

export default Routes;
