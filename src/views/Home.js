import { Card } from '@rneui/themed';
import CardItem from '../components/CardItem';
import { Button } from '@rneui/themed';
import { View } from 'react-native';
import styles from '../assets/styles/styles';
const Home = ({ tasks, handleChangeCheckbox, navigation }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.widthView}> */}
      <Card>
        <Card.Title>Todo Task</Card.Title>
        <Card.Divider />
        {tasks.map((task, i) => (
          <CardItem
            key={i}
            task={task}
            handleChangeCheckbox={handleChangeCheckbox}
          />
        ))}
      </Card>
      {/* </View> */}
      <View style={styles.buttonWidth}>
        <Button
          color="secondary"
          onPress={() => navigation.navigate('AddTask')}
          size="lg"
        >
          Mostrar Formulario
        </Button>
      </View>
    </View>
  );
};

export default Home;
