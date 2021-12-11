import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const MainScreen = (term, onTermChange, onTermSubmit) => {
  var prods = [
    { id: "1", itemname: "Milk" },
    { id: "2", itemname: "Coffee" },
    { id: "3", itemname: "Oranges" },
    { id: "4", itemname: "Bread" },
    { id: "5", itemname: "Eggs" },
    { id: "6", itemname: "Chicken" },
    { id: "7", itemname: "Carrot" },
    { id: "8", itemname: "Butter Milk" },
    { id: "9", itemname: "Packets" },
    { id: "10", itemname: "Rice" },
    { id: "11", itemname: "Roti" },
    { id: "12", itemname: "Frankie" },
    { id: "13", itemname: "Pizza" },
    { id: "14", itemname: "Mouse" },
  ];

  const [emp, setEmp] = useState([]);
  const [query, setQuery] = useState("");

  console.log(emp);
  return (
    <ScrollView>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.searchIcon} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          placeholder="Search"
          onChangeText={setQuery}
        />
        <View style={styles.separator} />

        <TouchableOpacity
          onPress={() => {
            setEmp([...emp, prods[Math.floor(Math.random() * prods.length)]]);
          }}
        >
          <View
            style={{
              marginHorizontal: 45,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#00716F",
            }}
          ></View>
          <Text
            style={{
              color: "black",
              fontSize: 35,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separator1} />

      <View>
        <FlatList
          keyExtractor={() => Math.floor(Math.random())}
          data={emp}
          renderItem={({ item }) => {
            return (
              <>
                <Text
                  style={{ fontWeight: "700", marginLeft: 10, fontSize: 25 }}
                >
                  {item.itemname}
                </Text>
                <View style={styles.separator1} />
              </>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E0E0E0", //#F0EEEE
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginVertical: 10,
  },
  searchIcon: {
    fontSize: 24,
    color: "black",
    paddingLeft: 20,
    paddingRight: 5,
    alignSelf: "center",
  },
  input: {
    width: "70%",
  },
  separator: {
    marginVertical: 8,
    borderRightColor: "#737373",
    borderRightWidth: 2,
    marginRight: 15,
  },
  separator1: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: 2,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 15,
  },
});

export default MainScreen;
