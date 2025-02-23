import { Box, Container, Stack } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { COLORS } from "../../config/conlor";
import { navbarLinks } from "./navbarData";

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: ${COLORS.titleColor};
`;

export const Navbar = () => {
  return (
    <Box py={"30px"} bgcolor={COLORS.lightGrey}>
      <Container maxWidth="xl">
        <Stack direction={"row"} justifyContent={"space-between"}>
          {navbarLinks.map((item) => (
            <CustomLink key={item.id} to={item.path}>
              {item.name}
            </CustomLink>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
