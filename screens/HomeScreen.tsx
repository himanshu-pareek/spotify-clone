import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import AlbumCategoryComponent from '../components/AlbumCategoryComponent';
import AlbumComponent from '../components/AlbumComponent';

import { Text, View } from '../components/Themed';
import albumCategories from '../data/albumCategories';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <AlbumCategoryComponent albumCategory={albumCategory} /> */}
      {/* <AlbumComponent album={album} /> */}
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => <AlbumCategoryComponent albumCategory={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
