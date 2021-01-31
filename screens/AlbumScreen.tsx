import React from 'react';
import { FlatList } from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';
import { Text, View } from '../components/Themed';

import albumDetails from '../data/albumDetails';

const AlbumScreen = ({ route }) => {
    return (
        <View>
            {/* <SongListItem song={albumDetails.songs[0]} /> */}
            <FlatList
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
            />
        </View>
    );
};

export default AlbumScreen;