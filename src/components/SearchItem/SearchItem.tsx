import { Box } from "@mui/material";
import React from "react";
import { useAppDispatch } from "../../redux/hook";
import { addFavorite } from "../../redux/slices/favoriteSlice";
import { emptier } from "../../redux/slices/searchSlice";
import { FavItemType } from "../../types";
import { style } from "./style/style";

type SearchItemProps = {
  data: any;
};

export const SearchItem: React.FC<SearchItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { lon, lat, name, country } = data;

  const itemClickHandler = (
    lon: number,
    lat: number,
    name: string,
    country: string
  ) => {
    const favObj: FavItemType = {
      id: Date.now(),
      coord: { lon: lon, lat: lat },
      name: name,
      country: country,
    };

    const ls = window.localStorage;
    const lsString = ls.getItem("favorites");
    let localItems: FavItemType[];
    if (lsString) {
      localItems = JSON.parse(lsString);
    } else {
      localItems = [];
    }
    const duplicate: FavItemType | undefined = localItems.find(
      (item) => item.name === favObj.name && item.country === favObj.country
    );
    if (!duplicate) {
      localItems.push(favObj);
      ls.setItem("favorites", JSON.stringify(localItems));
      dispatch(addFavorite(favObj));
    }
    dispatch(emptier());
  };

  return (
    <Box
      sx={style.item}
      onClick={() => {
        itemClickHandler(lon, lat, name, country);
      }}
    >
      {name + " " + country}
    </Box>
  );
};
