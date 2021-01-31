import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

import { View, Text } from '../../components/Themed';
import { Album } from '../../types';
import styles from './styles';

export type AlbumProps = {
    album: Album
}

const AlbumComponent = (props: AlbumProps) => {

    const navigator = useNavigation();

    const { album } = props;

    const handleAlbumPress = () => {
        navigator.navigate('AlbumScreen', {
            album
        });
    };

    return (
        <TouchableWithoutFeedback onPress={handleAlbumPress}>
            <View style={styles.container}>
                {/* Image of album */}
                <Image source={{ uri: album.imageUri }} style={styles.image} />
                {/* Artists Head Line */}
                <Text style={styles.artists}
                    numberOfLines={2}>
                    {album.artistsHeadline}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AlbumComponent;