import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        paddingTop: getStatusBarHeight() + 60,
        paddingHorizontal: 24
    },
    content: {
        justifyContent: 'center',
        marginBottom: 80,
    },
    header: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginLeft: 80,
        alignItems: 'center'
    },
    input: {
        marginBottom: 25,
    },
    subtitle: {
        fontSize: 18,
        fontFamily: theme.fonts.title500,
        color: theme.colors.heading
    },
    formnotready: {
        width: '100%',
        paddingHorizontal: 24,
        height: 48,
        backgroundColor: theme.colors.secondary40,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.colors.secondary30,
        borderWidth: 2,
        marginBottom: 48
    },
    formnotreadytext: {
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    }
});