import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        paddingTop: 100,
    },
    button: {
        marginLeft: 15,
        marginRight: 70
    },
    container: {
        width: '100%',
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginRight: 10,
    },
    list: {
        paddingTop: 50,
        width: '100%',
        paddingHorizontal: 24,
    },
    topic: {
        fontSize: 18,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight
    },
    line: {
        marginLeft: 7,
    }
});