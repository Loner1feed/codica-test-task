import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { CityInfo } from "./pages/CityInfo/CityInfo";
import { FavItemType } from "./types";
import { useAppDispatch } from "./redux/hook";
import { overrideFavorite } from "./redux/slices/favoriteSlice";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const ls = window.localStorage;
    const lsItems = ls.getItem("favorites");
    if (lsItems) {
      const localFavoriteItems: FavItemType[] = JSON.parse(lsItems);
      dispatch(overrideFavorite(localFavoriteItems));
    }
  }, []);

  const appStyles = {
    background: "rgba(54,63,91, 0.8)",
    maxWidth: "800px",
    margin: "0px auto",
    padding: "20px",
    position: "relative",
    borderRadius: "5px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: " blur(6.6px)",
    "-webkit-backdrop-filter": "blur(6.6px)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
  };

  return (
    <Box sx={appStyles}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="city" element={<CityInfo />} />
      </Routes>
    </Box>
  );
};

export default App;
