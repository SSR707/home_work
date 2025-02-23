import {
  Badge,
  Box,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/headerIcon.svg";
import LocationIcon from "../../assets/headerLocation.svg";
import SearchIcon from "../../assets/searchIcon.svg";
import UserIcon from "../../assets/headerUserIcon.svg";
import KorzinkaIcon from "../../assets/headerKorzinka.svg";
import LikeIcon from "../../assets/headerLike.svg";
import { COLORS } from "../../config/conlor.js";
import { Navbar } from "./navbar.jsx";

export const Header = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction={"row"} py={"31px"} gap={"60px"} alignItems={"center"}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            flexGrow={1}
            gap={"60px"}
          >
            <Link>
              <img src={headerLogo} alt="" />
            </Link>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton>
                <img src={LocationIcon} alt="" />
              </IconButton>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: COLORS.titleColor,
                }}
              >
                Алматы
              </Typography>
            </Stack>
            <Stack
              flexGrow={1}
              position={"relative"}
              direction={"row"}
              alignItems={"center"}
            >
              <TextField
                id="standard-basic"
                placeholder="Поиск по товарам"
                variant="standard"
                sx={{
                  flexGrow: 1,
                  "& .MuiInputBase-input": {
                    fontSize: "19px",
                    fontWeight: "400",
                    lineHeight: "100%",
                    color: "#000",
                    paddingBottom: "8px",
                  },
                }}
              />
              <IconButton
                disableRipple
                sx={{ position: "absolute", right: "0px", marginBottom: "2px" }}
              >
                <img src={SearchIcon} alt="" />
              </IconButton>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} gap={"40px"}>
            <Badge badgeContent={0} color="error">
              <img src={UserIcon} alt="" width={"24px"} height={"24px"} />
            </Badge>
            <Badge badgeContent={5} color="error">
              <img src={LikeIcon} alt="" width={"24px"} height={"24px"} />
            </Badge>
            <Badge badgeContent={2} color="error">
              <img src={KorzinkaIcon} alt="" width={"24px"} height={"24px"} />
            </Badge>
          </Stack>
        </Stack>
      </Container>
      <Navbar />
    </>
  );
};
