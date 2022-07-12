import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import { SearchItem } from "../SearchItem/SearchItem";
import { style } from "./style/style";

export const SearchResults: React.FC = () => {
  const items = useAppSelector((state) => state.search.items);

  return (
    <Box>
      {items.length !== 0 && (
        <Box sx={style.list}>
          {items.map((item, i) => (
            <SearchItem key={i} data={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};
