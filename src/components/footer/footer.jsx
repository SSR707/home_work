import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  TextField,
  Button,
} from "@mui/material";

import footerBtnIcon from "../../assets/footerBtnIcon.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/emailIcon.svg";
import whatSapIcon from "../../assets/whatSapIcon.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import facebook from "../../assets/facebook.svg";

export const Footer = () => {
  return (
    <Box backgroundColor={"#f2f2f2;"} padding={"50px 108px"}>
      <Container>
        <Box display={"flex"} gap={"66px"}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "130%",
                color: " #1d1d1d",
                width: "185px",
              }}
              variant="h6"
            >
              Каталог товаров
            </Typography>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Ковры
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Коврики
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Дорожки
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Для ванной
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Особенные ковры
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "130%",
                color: " #1d1d1d",
                width: "185px",
              }}
              variant="h6"
            >
              Личный кабинет
            </Typography>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Личный кабинет
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Мои заказы
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Избранное
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "130%",
                color: " #1d1d1d",
                width: "185px",
              }}
              variant="h6"
            >
              Центр поддержки
            </Typography>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Контакты
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Доставка
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
              }}
              href="#"
              display="block"
            >
              Возвраты
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "130%",
                color: " #1d1d1d",
                width: "185px",
              }}
              variant="h6"
            >
              Помощь и контакты
            </Typography>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
                display: "flex",
                alignItems: "center",
                gap: "11px",
              }}
              href="#"
              display="block"
            >
              <img src={phoneIcon} alt="" />
              +7 775 657 66 76
            </Link>
            <Link
              style={{
                fontSize: "14px",
                lineHeight: "130%",
                color: "#1D1D1D",
                textDecoration: "none",
                opacity: "50%",
                display: "flex",
                alignItems: "center",
                gap: "11px",
              }}
              href="#"
              display="block"
            >
              <img src={emailIcon} alt="" />
              nfo@kilem.kz
            </Link>
            <Box display={"flex"} gap={"20px"}>
              <Link>
                <img
                  src={whatSapIcon}
                  alt=""
                  style={{ opacity: "100%", width: "20px", height: "20px" }}
                />
              </Link>
              <Link>
                <img
                  src={instagramIcon}
                  alt=""
                  style={{ opacity: "100%", width: "20px", height: "20px" }}
                />
              </Link>
              <Link>
                <img
                  src={facebook}
                  alt=""
                  style={{ opacity: "100%", width: "20px", height: "20px" }}
                />
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "130%",
                color: " #1d1d1d",
                width: "200px",
              }}
              variant="h6"
            >
              Личный кабинет
            </Typography>
            <Typography variant="p">
              Подпишитесь, чтобы всегда быть в курсе наших новый акций
            </Typography>
            <Box
              display="flex"
              border="2px solid #ccc"
              borderRadius="10px"
              overflow="hidden"
            >
              <TextField
                id="outlined-basic"
                label="Ваш email"
                variant="outlined"
                sx={{
                  width: "200px",
                  borderRight: "2px solid #ccc",
                  "& fieldset": { border: "none" },
                }}
              />
              <Button
                sx={{
                  borderRadius: "0 0",
                  padding: "16px 15px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#1565c0",
                  },
                }}
                variant="contained"
              >
                <img src={footerBtnIcon} alt="" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      ;
    </Box>
  );
};
