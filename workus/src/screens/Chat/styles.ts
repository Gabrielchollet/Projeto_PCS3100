import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    content: {
      width: 300,
      height: 60,
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 100,
      color: theme.colors.secondary100,
      borderColor: theme.colors.heading,
      borderWidth: 1,
      borderRadius: 25,
    },
    text: {
      fontFamily: theme.fonts.text500,
      color: theme.colors.highlight,
      textAlignVertical: 'top',
      marginTop: 7,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 7
    }
})
