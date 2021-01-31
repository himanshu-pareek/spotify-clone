import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    artist: {
        fontSize: 20
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        margin: 10,
    },
    container_text: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'space-evenly'
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 15,
    },
    title: {
        // fontWeight: 'bold',
        fontSize: 24,
    },
});

export default styles;
