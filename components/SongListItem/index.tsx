import React from 'react';
import { Image } from 'react-native';
import { Song } from '../../types';

import { View, Text } from '../Themed';

import styles from './styles';

export type SongListItemProps = {
    song: Song
};

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    return (
        <View style={styles.container}>
            {/* Image Cove */}
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.container_text}>
                {/* Title */}
                <Text style={styles.title}>
                    {song.title}
                </Text>
                {/* Artist */}
                <Text style={styles.artist} lightColor='darkgray' darkColor="lightgray">
                    {song.artist}
                </Text>
            </View>
        </View>
    );
};

export default SongListItem;