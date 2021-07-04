import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        marginTop: getStatusBarHeight() + 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 24,
        color: theme.colors.heading
    },
    content: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    worker: {
        width: 150,
        height: 200,
        backgroundColor: theme.colors.secondary100,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.colors.heading,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boss: {
        width: 150,
        height: 200,
        backgroundColor: theme.colors.secondary100,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.colors.heading,
        alignItems: 'center',
        justifyContent: 'center'
    },
    subtitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading,
        padding: 30
    },
    categories: {
        flexDirection: 'row'
    }
});