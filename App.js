import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import PageManager from "./components/pageManager";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <PageManager />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
