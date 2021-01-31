export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  MyLibrary: undefined;
  Premium: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
  AlbumScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type MyLibraryParamList = {
  MyLibraryScreen: undefined;
};

export type PremiumParamList = {
  PremiumScreen: undefined;
};

export type Album = {
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};
