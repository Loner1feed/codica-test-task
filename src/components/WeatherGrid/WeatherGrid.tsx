import { Box } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../redux/hook";
import { WeatherItem } from "../WeatherItem/WeatherItem";
import { style } from "./style/style";

export const WeatherGrid: React.FC = () => {
  const favItems = useAppSelector((state) => state.favorite);

  const mapped = favItems.map((item, i) => <WeatherItem key={i} data={item} />);

  return <Box sx={style.grid}>{mapped}</Box>;
};
