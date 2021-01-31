import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

import { View, Text } from '../Themed';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const song = {
    id: '1',
    uri: 'http://jiomix.in/siteuploads/files/sfd24/11521/Bhool%20Bhulaiyaa(jiomix.in).mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
};

const PlayerWidget = () => {

    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const onPlaybackStatusUpdate = (status) => {
        console.log(status);
        setIsPlaying(status.isPlaying);
    };

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        );

        setSound(sound);
    };

    useEffect(() => {
        playCurrentSong();
    }, []);

    const onTogglePlay = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
    }

    const iconName = isPlaying ? 'pause' : 'play-arrow';


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
            <View style={styles.iconContainer}>
                <MaterialIcons name="favorite-border" size={30} color="white" />
                <TouchableOpacity onPress={onTogglePlay}>
                    <MaterialIcons name={iconName} size={30} color="white" />
                </TouchableOpacity>
                {/* <MaterialIcons name="pause" size={30} color="white" /> */}
            </View>
        </View>
    );
};

export default PlayerWidget;