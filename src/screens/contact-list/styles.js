import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    marginVertical: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    color: colors.text,
    fontWeight: "bold",
  },
  img: {
    width: 300,
    height: 300,
  }
});
