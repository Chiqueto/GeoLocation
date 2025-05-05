import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./src/pages/Main";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Main />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
