/* eslint-disable react-hooks/exhaustive-deps */
import { Box, ButtonBase, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { getWeather, setCurrentItem } from "../../redux/slices/weatherSlice";
import { FavItemType } from "../../types";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { style } from "./style/style";

type WeatherItemProps = {
  data: FavItemType;
};

export const WeatherItem: React.FC<WeatherItemProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const item = useAppSelector((state) =>
    state.weather.items.find((item: any) => item.id === data.id)
  );
  const { error, loading } = useAppSelector((state) => state.weather);

  useEffect(() => {
    if (!item) {
      dispatch(getWeather(data));
    }
  }, []);

  const refreshHandler = () => {
    dispatch(getWeather(data));
  };

  const itemClickHandler = () => {
    navigate("city");
    dispatch(setCurrentItem(item.id));
  };

  return (
    <Box>
      {!!item && (
        <Box>
          <ButtonBase sx={style.refresh} onClick={refreshHandler}>
            Refresh
          </ButtonBase>
          <Box onClick={itemClickHandler} sx={style.item}>
            <WeatherIcon size="small" icon={item.data.weather[0].icon} />
            <Box component="span" sx={style.deg}>
              {Math.round(item.data.main.temp) + "°"}
            </Box>
            <Box component="h2">
              {item.data.name + ", " + item.data.sys.country}
            </Box>
          </Box>
        </Box>
      )}
      {!item && !!error && !loading && <div>{error}</div>}
      {!item && loading && (
        <Box sx={style.loading}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};
