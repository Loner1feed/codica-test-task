import { Box } from "@mui/material";
import React from "react";
import { Search } from "../../components/Search/Search";
import { WeatherGrid } from "../../components/WeatherGrid/WeatherGrid";

export const Main: React.FC = () => {
  return (
    <Box>
      <Search />
      <WeatherGrid />
    </Box>
  );
};
