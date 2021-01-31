import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    artist: {
        fontSize: 20
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        position: 'absolute',
        bottom: 49,
        borderTopColor: 'gray',
        borderTopWidth: 1,
        alignItems: 'center',
    },
    container_text: {
        flex: 1,
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
    },
    image: {
        height: 75,
        width: 75,
        borderRadius: 15,
        marginRight: 10,
    },
    title: {
        // fontWeight: 'bold',
        fontSize: 24,
        margin: 10,
    },
});

export default styles;
