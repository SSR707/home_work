import { Badge, Box, Button, Container, Link, TextField } from "@mui/material";
import HeaderIcon from "../../assets/headerIcon.svg";
import HeaderIconLocation from "../../assets/headerLocation.svg";
import HeaderIconSearch from "../../assets/searchIcon.svg";
import HeaderIconUser from "../../assets/headerUserIcon.svg";
import HeaderIconKorzinka from "../../assets/headerKorzinka.svg";
import HeaderIconLike from "../../assets/headerLike.svg";

export const Header = () => {
  return (
    <Container sx={{ maxWidth: "1281px", width: "100%", margin: "0 auto" }}>
      <Box display="flex" alignItems="center" gap={"40px"}>
        <Box display="flex" alignItems="center" gap={"50px"}>
          <Box display="flex" alignItems="center">
            <a href="">
              <img src={HeaderIcon} alt="Header Icon" width={"210px"} />
            </a>
          </Box>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "14px",
              lineHeight: "100%",
              color: "#1d1d1d",
              fontWeight: "400",
            }}
            startIcon={<img src={HeaderIconLocation} width="22" height="22" />}
          >
            Алматы
          </Button>

          <Box position={"relative"}>
            <TextField
              sx={{ width: "600px" }}
              id="standard-basic"
              label="Поиск по товарам"
              variant="standard"
            />
            <Button
              disableRipple={true}
              sx={{
                position: "absolute",
                right: "-10px",
                bottom: "5px",
              }}
            >
              <img src={HeaderIconSearch} width="24" height="24" />
            </Button>
          </Box>
        </Box>
        <Box display={"flex"} gap={"35px"} alignItems={"center"} width="100%">
          <Badge>
            <img src={HeaderIconUser} width="20" height="20" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <img src={HeaderIconLike} width="20" height="20" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <img src={HeaderIconKorzinka} width="20" height="20" />
          </Badge>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"30px 0px"}
      >
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Ковры
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Коврики
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Для ванной
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Дорожки
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Особенные ковры
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Центр поддержки
        </Link>
        <Link
          href="#"
          underline="none"
          fontSize={"18px"}
          fontWeight={"400"}
          color={"#1d1d1d"}
          lineHeight={"100%"}
        >
          Контакты
        </Link>
      </Box>
    </Container>
  );
};
