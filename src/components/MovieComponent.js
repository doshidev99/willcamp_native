import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";

import Button from "react-native-button";
import { useDispatch } from "react-redux";

const MoviceComponent = ({ movies }) => {
  const dispatch = useDispatch();
  const onFetchMovies = () => {
    dispatch({ type: "FETCH_MOVIE" });
  };
  return (
    <View>
      <Text style={styles.headline}> Redux saga tutorials - movies list </Text>

      <Text style={styles.subHead}>New movie infomation</Text>

      <TextInput
        placeholder="Enter new movie name"
        style={styles.inputText}
        placeholderStyle={{ color: "red" }}
      />

      <TextInput
        placeholder="Release year"
        style={styles.inputText}
        placeholderStyle={{ color: "red" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 5,
            backgroundColor: "darkviolet",
          }}
          onPress={onFetchMovies}
        >
          <Text style={styles.rootColor}>Fetch movies</Text>
        </Button>
        <Button
          containerStyle={{
            padding: 10,
            height: 45,
            borderRadius: 5,
            backgroundColor: "darkviolet",
            marginLeft: 30,
          }}
        >
          <Text style={styles.rootColor}>Add movies</Text>
        </Button>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => {
          return (
            <Text
              style={{
                padding: 10,
                fontWeight: "bold",
                fontSize: 17,
                color: "purple",
                backgroundColor: "lightblue",
              }}
            >
              Name Movie: {item.name}
              {"\n"}
              Release Year: {item.year}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    padding: 10,
    fontSize: 15,
    color: "green",
    textAlign: "center",
  },
  subHead: {
    color: "black",
    padding: 20,
  },

  inputText: {
    borderWidth: 1,
    padding: 15,
    margin: 10,
    borderColor: "gray",
    color: "red",
  },
  rootColor: {
    color: "white",
  },
});

export default MoviceComponent;
