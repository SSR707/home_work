import { Box, Container, Stack, Typography } from "@mui/material";
import { Link, Navigate, Outlet, useParams } from "react-router-dom";
import { Rugs } from "./components/rug";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { COLORS } from "../../config/conlor";
import { ProductInfo } from "./productInfoData";
import { Sectionn } from "../home/components/section";
import { data } from "../../data/data";
const CustomTypography = styled(Typography)`
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
`;

export const Product = () => {
  const { id } = useParams();
  const isChek = data.some((item) => item.id === +id);
  const [activeTab, setActiveTab] = useState(location.pathname);
  useEffect(() => {
    window.scrollTo({ top: 200 });
  }, [id]);
  if (!isChek) {
    return <Navigate to="*" replace />;
  }
  return (
    <>
      <section style={{ paddingTop: "30px" }}>
        <Container maxWidth="xl">
          <Stack>
            <Rugs id={id} />
            <Stack direction={"row"}>
              {ProductInfo.map((item) => {
                const isActive = activeTab === item.path;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    style={{ textDecoration: "none" }}
                    onClick={() => setActiveTab(item.path)}
                  >
                    <Box
                      width={"320px"}
                      py={"13px"}
                      bgcolor={isActive ? COLORS.primary : "#fff"}
                      borderBottom={
                        isActive
                          ? `2px solid ${COLORS.primary}`
                          : "2px solid #000"
                      }
                    >
                      <CustomTypography color={isActive ? "#fff" : "#000"}>
                        {item.name}
                      </CustomTypography>
                    </Box>
                  </Link>
                );
              })}
            </Stack>
            <Stack paddingTop={"40px"}>
              <Outlet />
            </Stack>
          </Stack>
        </Container>
        <Stack py={"100px"}>
          <Sectionn title={"Вам может понравиться"} />
        </Stack>
      </section>
    </>
  );
};
