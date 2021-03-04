import React from "react";
import { View, Text, FlatList } from "react-native";

const TaskListComponent = ({ listTask }) => {
  // eslint-disable-next-line no-console
  console.log(listTask, "<----");
  return (
    <FlatList
      keyExtractor={(item, index) => index}
      data={listTask}
      renderItem={({ item, index }) => {
        return (
          <Text
            style={{
              backgroundColor: item.completed ? "purple" : "white",
              color: "yellow",
              padding: 20,
            }}
          >
            {item.task}
          </Text>
        );
      }}
    />
  );
};

export default TaskListComponent;
