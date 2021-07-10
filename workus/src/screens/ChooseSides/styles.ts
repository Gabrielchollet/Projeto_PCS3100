import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight() + 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    content: {
        marginTop: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    worker: {
        width: 120,
        height: 120,
        borderRadius: 8,
        borderWidth: 2,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.heading,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boss: {
        width: 120,
        height: 120,
        borderRadius: 8,
        borderWidth: 2,
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.heading,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        marginTop: 15,
        paddingHorizontal: 20
    },
    categories: {
        flexDirection: 'row'
    }
});