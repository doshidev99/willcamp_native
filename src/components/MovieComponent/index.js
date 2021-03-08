import React, { useEffect } from 'react';
import {
  FlatList,
  Keyboard, Text,

  TextInput, View,
} from 'react-native';
import Button from 'react-native-button';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './styles';

const MoviceComponent = ({ movies, navigation }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-console
  console.log(navigation, '<----');
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        console.log('keyboardDidShow', '<----'); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('keyboardDidHide', '<----'); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const onFetchMovies = () => {
    dispatch({ type: 'FETCH_MOVIE' });
  };

  return (
    <View>
      <Text style={styles.headline}> Redux saga tutorials - movies list </Text>

      <Text style={styles.subHead}>New movie infomation</Text>

      <TextInput
        placeholder="Enter new movie name"
        style={styles.inputText}
        placeholderStyle={{ color: 'red' }}
      />

      <TextInput
        placeholder="Release year"
        style={styles.inputText}
        placeholderStyle={{ color: 'red' }}
      />
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}
      >
        <Button
          containerStyle={{ padding: 15, borderRadius: 5, backgroundColor: 'darkviolet' }}
          // onPress={onFetchMovies}
          onPress={() => navigation.navigate('Increment')}
        >
          <Text style={styles.rootColor}>Fetch movies</Text>
        </Button>
        <Button
          containerStyle={{
            padding: 15, borderRadius: 5, backgroundColor: 'darkviolet', marginLeft: 30,
          }}
        >
          <Text style={styles.rootColor}>Add movies</Text>
        </Button>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text
              style={{
                padding: 10, fontWeight: 'bold', fontSize: 17, color: 'black', backgroundColor: 'lightblue',
              }}
            >
              Name Movie:
              {' '}
              {item.name}
              {'\n'}
              Release Year:
              {' '}
              {item.year}
            </Text>
            <View style={{ height: 1, backgroundColor: 'white' }} />
          </View>
        )}
      />
    </View>
  );
};

MoviceComponent.propTypes = {
  movies: PropTypes.instanceOf(Array),
  navigation: PropTypes.func,
};

MoviceComponent.defaultProps = {
  movies: [],
  navigation: () => { },
};

export default MoviceComponent;
