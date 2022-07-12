import { Box, InputBase } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { emptier, getResults } from "../../redux/slices/searchSlice";
import { SearchResults } from "../SearchResults/SearchResults";
import { style } from "./style/style";

export const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [limit] = useState<number>(5);
  const inputRef = useRef();

  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.search.items);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const geoCall = async (value: string, limit: number) => {
    dispatch(getResults({ phrase: value, limit: limit }));
  };

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (value) {
      if (limit === 5) {
        timeout = setTimeout(() => {
          geoCall(value, limit);
        }, 500);
      }
    } else {
      if (items.length) {
        dispatch(emptier());
      }
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return (
    <Box sx={style.wrap}>
      <InputBase
        sx={style.field}
        fullWidth
        placeholder="Search city"
        value={value}
        onChange={changeHandler}
        inputRef={inputRef}
      />
      {document.activeElement === inputRef.current && <SearchResults />}
    </Box>
  );
};
