import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

// redux-saga
import IncrementContainer from './src/containers/IncrementContainer';
import MovieContainers from './src/containers/MovieContainers';

import store from './src/redux/rootSaga';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 35 : 0,
    // backgroundColor: "tomato",
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MovieContainers />
        <IncrementContainer />
      </View>
    </Provider>
  );
}
