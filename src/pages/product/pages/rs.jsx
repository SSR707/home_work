import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../config/conlor";
import rs from "../img/rs.svg";

export const Rs = () => {
  return (
    <Box display={"flex"} gap={"13px"} alignItems={"center"}>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "140%",
          color: COLORS.titleColor,
        }}
      >
        Купить в рассрочку Kaspi
      </Typography>
      <img src={rs} alt="" />
    </Box>
  );
};
