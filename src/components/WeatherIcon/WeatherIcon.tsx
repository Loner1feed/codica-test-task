import { Box } from "@mui/material";
import React from "react";
import { style } from "./style/style";

type WeatherIconProps = {
  icon: string;
  size: "small" | "large";
};

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  icon,
  size = "small",
}) => {
  return (
    <>
      {icon && (
        <Box sx={style.wrap}>
          <img
            src={`http://openweathermap.org/img/wn/${icon}@${
              size === "large" ? 4 : 2
            }x.png`}
            alt=""
          />
        </Box>
      )}
    </>
  );
};
