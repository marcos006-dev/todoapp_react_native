import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CardItem = ({ task, handleChangeCheckbox }) => {
  const styleText = task.completed ? styles.crossOutTask : styles.name;

  return (
    <>
      <View style={styles.user}>
        <Text style={styleText}>{task.name}</Text>
        <BouncyCheckbox
          isChecked={task.completed}
          onPress={(isChecked) => {
            handleChangeCheckbox(task, isChecked);
          }}
        />
      </View>
    </>
  );
};

export default CardItem;
