import { Box, ButtonBase } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { deleteFavorite } from "../../redux/slices/favoriteSlice";
import { deleteItem, eraseCurrentItem } from "../../redux/slices/weatherSlice";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { style } from "./style/style";

export const WeatherInfo: React.FC = () => {
  const item = useAppSelector((state) => state.weather.currentItem);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const backHandler = () => {
    navigate("/");
    dispatch(eraseCurrentItem());
  };

  const deleteHandler = () => {
    const ls = window.localStorage;
    const lsItem = ls.getItem("favorites");
    if (lsItem) {
      let itemArr = JSON.parse(lsItem);
      itemArr = itemArr.filter((el: any) => el.id !== item.id);
      ls.setItem("favorites", JSON.stringify(itemArr));
    }

    dispatch(deleteFavorite(item.id));
    dispatch(deleteItem(item.id));
    backHandler();
  };

  return (
    <Box>
      {!!item && (
        <Box sx={style.wrapper}>
          <Box sx={style.plateExtended}>
            <ButtonBase sx={style.navButton} onClick={deleteHandler}>
              Delete
            </ButtonBase>

            <ButtonBase sx={style.navButton} onClick={backHandler}>
              Back
            </ButtonBase>
          </Box>

          <Box sx={style.plate}>
            <WeatherIcon icon={item.data.weather[0].icon} size="large" />
            <Box sx={style.info}>
              <Box component="h2">
                {item.data.name + ", " + item.data.sys.country}
              </Box>
              <Box component="span" sx={style.deg}>
                {Math.round(item.data.main.temp) + "°"}
              </Box>
              <Box component="span" sx={style.desc}>
                {item.data.weather[0].main}
              </Box>
            </Box>
          </Box>

          <Box sx={style.plateExtended}>
            <Box component="span">
              Feels like: {Math.round(item.data.main.feels_like)}°
            </Box>
            <Box component="span">Humidity: {item.data.main.humidity}%</Box>
            <Box component="span">Wind: {item.data.wind.speed}m/s</Box>
            <Box component="span">Pressure: {item.data.main.pressure}hPa</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
