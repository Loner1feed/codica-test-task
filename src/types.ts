export type CoordType = {
  lat: number;
  lon: number;
};

export type FavItemType = {
  id: number;
  name: string;
  country: string;
  coord: CoordType;
};
