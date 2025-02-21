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

export const Footer = () => {
  return (
    <Box>
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
              }}
              href="#"
              display="block"
            >
              +7 775 657 66 76
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
              nfo@kilem.kz
            </Link>
            <Box display={"flex"}>
              <Link>O</Link>
              <Link>O</Link>
              <Link>O</Link>
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
            <Box display={"flex"}>
              <TextField
                id="outlined-basic"
                label="Ваш email"
                variant="outlined"
                sx={{ width: "200px" }}
              />
              <Button
                sx={{ borderRadius: "0 10px 10px 0", padding: "16px 15px" }}
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
