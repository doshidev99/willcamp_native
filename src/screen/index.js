import MovieContainers from '../containers/MovieContainers';
import IncrementContainer from '../containers/IncrementContainer';

export const MainScreen = [
  {
    name: 'Main',
    screen: MovieContainers,
    navigationOptions: {
      title: 'Main',
    },
  },
  {
    name: 'Increment',
    screen: IncrementContainer,
    navigationOptions: {
      title: 'Increment',
    },
  },
];
