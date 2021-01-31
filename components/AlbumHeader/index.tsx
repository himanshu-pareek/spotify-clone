import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Album } from '../../types';

import { View, Text } from '../Themed';

import styles from './styles';

export type AlbumHeaderProps = {
    album: Album
};

const AlbumHeader = (props: AlbumHeaderProps) => {
    const { album } = props;
    return (
        <View style={styles.container}>
            {/* Cover Image */}
            <Image source={{ uri: album.imageUri }} style={styles.image} />

            {/* Name of album  */}
            <Text style={styles.name}>
                {album.name}
            </Text>

            {/* Creater and Number of likes */}
            <View style={styles.createrContainer} >
                {/* Creater  */}
                <Text style={styles.creater} lightColor="darkgray" darkColor="lightgray">
                    {`By ${album.by}`}
                </Text>

                {/* Number of likes */}
                <Text style={styles.likes} lightColor="darkgray" darkColor="lightgray">
                    {`${album.numberOfLikes} likes`}
                </Text>
            </View>

            {/* Play/Pause Button  */}
            <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        PLAY
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default AlbumHeader;
