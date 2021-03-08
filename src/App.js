// import React from 'react';
// import { Platform, StyleSheet, View } from 'react-native';
// import { Provider } from 'react-redux';

// // redux-saga
// import IncrementContainer from './containers/IncrementContainer';

// import store from './redux/rootSaga';

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Platform.OS === 'ios' ? 35 : 0,
//   },
// });

// export default function App() {
//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <MovieContainers />
//         <IncrementContainer />
//       </View>
//     </Provider>
//   );
// }
// In App.js in a new project

import * as React from 'react';

import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './redux/rootSaga';

import { MainScreen } from './screen';
// containers

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            MainScreen.map((e) => (
              <Stack.Screen name={e.name} component={e.screen} />
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
