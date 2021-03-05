import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const AddComponent = ({ onClickAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) {
      return;
    }

    onClickAdd({
      task: newTask,
      completed: Boolean(Math.round(Math.random())),
    });

    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter your task"
        autoCapitalize="none"
        placeholderTextColor="white"
        keyboardType="default"
        value={newTask}
        onChangeText={(text) => setNewTask(() => text)}
      />
      <TouchableHighlight
        style={styles.button}
        underlayColor="green"
        onPress={handleAddTask}
      >
        <Text style={{ color: 'white' }}>Add new task</Text>
      </TouchableHighlight>
    </View>
  );
};

AddComponent.propTypes = {
  onClickAdd: PropTypes.func,
};

AddComponent.defaultProps = {
  onClickAdd: () => { },
};

export default AddComponent;
