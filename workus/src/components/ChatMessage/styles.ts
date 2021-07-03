import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
      padding: 10,
      
    },
    messagebox: {
       borderRadius: 5,
       padding: 15,
    },
    chattext: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.heading
    }
    
})
