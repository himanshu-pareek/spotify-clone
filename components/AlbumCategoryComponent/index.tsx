import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

import { Album } from '../../types';
import AlbumComponent from '../AlbumComponent';
import { View, Text } from '../Themed';

import styles from './styles';

export type AlbumCategoryProps = {
    albumCategory: {
        title: string;
        albums: Album[];
    }
};

const AlbumCategoryComponent = (props: AlbumCategoryProps) => {
    const { albumCategory } = props;
    return (
        <View style={styles.container}>
            {/* Title of category */}
            <Text style={styles.title}>
                {albumCategory.title}
            </Text>
            {/* List of Albums */}
            <FlatList
                data={albumCategory.albums}
                renderItem={({ item }) => <AlbumComponent album={item} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default AlbumCategoryComponent;
