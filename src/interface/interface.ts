export interface IArtist {
  name: string;
  grammy: boolean;
}

export interface IAlbums {
  name: string;
  grammy: boolean;
}

export interface ITracks {
  title: string;
  grammy: boolean;
}

export interface Favorites {
  artists: string[];
  albums: string[];
  tracks: string[];
}

export interface IUpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}
