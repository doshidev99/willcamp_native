import React from "react";
import { View, Text, Platform, SectionList } from "react-native";
import { _data, sectionListData } from "../constants";

const SectionListItem = ({ item }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ backgroundColor: "green", padding: 10, color: "#fff" }}>
        {item.name}
      </Text>
      <Text style={{ backgroundColor: "green", padding: 10, color: "#fff" }}>
        {item.description}
      </Text>
      <View style={{ height: 1, backgroundColor: "#fff" }}></View>
    </View>
  );
};
export const SectionListCpn = () => {
  return (
    <View style={{ flex: 1, marginTop: Platform.OS === "ios" ? 34 : 0 }}>
      <SectionList
        sections={sectionListData}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <SectionListItem item={item} key={index} />
        )}
        renderSectionHeader={({ section }) => {
          // required params = section
          return (
            <View style={{ flex: 1, backgroundColor: "red" }}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

/* Section list 
  @params: name is section 
  renderSectionHeader : ({section:})
*/
