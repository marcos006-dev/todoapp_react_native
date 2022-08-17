// import { Image } from '@rneui/themed/dist/Image';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CardItem = ({ task, handleChangeCheckbox }) => {
  return (
    <View style={styles.user}>
      {/* <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: task.avatar }}
      /> */}
      <Text style={styles.name}>{task.name}</Text>
      <BouncyCheckbox
        isChecked={task.completed}
        onPress={(isChecked) => {
          handleChangeCheckbox(task, isChecked);
        }}
      />
    </View>
  );
};

export default CardItem;
