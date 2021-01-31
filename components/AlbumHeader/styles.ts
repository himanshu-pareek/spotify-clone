import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 175,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        alignItems: 'center',
        padding: 20,
    },
    creater: {
        margin: 5,
    },
    createrContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
        borderRadius: 40,
    },
    likes: {
        margin: 5,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default styles;