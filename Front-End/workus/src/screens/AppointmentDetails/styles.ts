import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bannerContent: {
        marginTop: 60,
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24,
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    subtitle: {
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight
    },
    members: {
        marginLeft: 24,
        marginTop: 10
    },
    footer: {
        paddingHorizontal: 24,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
})
