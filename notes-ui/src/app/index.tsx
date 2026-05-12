import { Text, View, StyleSheet } from "react-native";
import {NotesListScreen} from "../screens/NotesListScreen"

export default function Index() {
  return (
    <View style={styles.container}>
      <NotesListScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
