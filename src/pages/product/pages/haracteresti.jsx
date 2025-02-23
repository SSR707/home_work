import { Box, Typography } from "@mui/material";
import { COLORS } from "../../../config/conlor";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "../../../data/data";

const CustomTypography = styled(Typography)`
  font-size: 18px;
  line-height: 140%;
  color: ${COLORS.titleColor};
  text-align: start;
`;

export const Haracteristic = () => {
  const { id } = useParams();
  const [rugs, setRugs] = useState({});
  useEffect(() => {
    const rug_data = data.find((item) => item.id === +id);
    if (rug_data.title) {
      setRugs(rug_data);
    }
  }, [id]);

  return (
    <>
      <Box width={"398px"}>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"128px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>
            Материал
          </CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {rugs?.material}
          </CustomTypography>
        </Box>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"137px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>
            Толщина
          </CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {" "}
            {rugs?.thickness}
          </CustomTypography>
        </Box>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"183px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>Вес</CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {rugs?.weight}
          </CustomTypography>
        </Box>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"125px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>
            Плотность
          </CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {rugs?.density}
          </CustomTypography>
        </Box>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"80px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>
            Производитель
          </CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {rugs?.manufacturer}
          </CustomTypography>
        </Box>
        <Box
          sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
          display={"flex"}
          gap={"157px"}
          py={"16px"}
        >
          <CustomTypography sx={{ fontWeight: "700" }}>Страна</CustomTypography>
          <CustomTypography sx={{ fontWeight: "400" }}>
            {rugs?.country}
          </CustomTypography>
        </Box>
      </Box>
    </>
  );
};
