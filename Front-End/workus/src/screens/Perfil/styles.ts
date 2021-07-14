import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading
    },
    content: {
        paddingHorizontal: 40,
        marginTop: 10,
    },
    topics: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    subtitle: {
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
        marginRight: 10,
        marginTop: 8
    },
    contenttwo: {
        paddingHorizontal: 40,
        marginTop: 50,
    },
    image: {
        width: 100,
        height: 100
    },
    subtitletwo: {
        fontSize: 15,
        fontFamily: theme.fonts.text500,
        color: theme.colors.highlight,
        marginRight: 10,
        marginTop: -70
    },
    avaliation: {
        marginTop: 30
    },
    stars: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    imagetwo: {
        width: 50,
        height: 50
    },

});