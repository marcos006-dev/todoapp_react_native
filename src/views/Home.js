import { Card } from '@rneui/themed';
import CardItem from '../components/CardItem';
import { Button } from '@rneui/themed';
const Home = ({ tasks, handleChangeCheckbox, navigation }) => {
  return (
    <>
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
      <Button
        color="secondary"
        onPress={() => navigation.navigate('AddTask')}
        size="lg"
      >
        Mostrar Formulario
      </Button>
    </>
  );
};

export default Home;
