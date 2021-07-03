import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: 200,
        height: 200,
        borderRadius: 20,
        backgroundColor: theme.colors.highlight,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:80
    },
    image: {
        width: 150,
        height: 150,
    },
    content: {
        paddingHorizontal: 50,
    }

})