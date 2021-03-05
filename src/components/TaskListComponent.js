import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Text } from 'react-native';

const TaskListComponent = ({ listTask }) => (
  <FlatList
    keyExtractor={(item, index) => index}
    data={listTask}
    renderItem={({ item }) => (
      <Text
        style={{
          backgroundColor: item.completed ? 'purple' : 'white',
          color: 'yellow',
          padding: 20,
        }}
      >
        {item.task}
      </Text>
    )}
  />
);

TaskListComponent.propTypes = {
  listTask: PropTypes.instanceOf(Array),
};

TaskListComponent.defaultProps = {
  listTask: [],
};

export default TaskListComponent;
