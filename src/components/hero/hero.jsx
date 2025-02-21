import { Box, Button, Container, Typography } from "@mui/material";
import HeroImg1 from "../../assets/hero.img-1.svg";
import HeroImg2 from "../../assets/hero.img-2.svg";
export const Hero = () => {
  return (
    <Container sx={{ maxWidth: "1281px", width: "100%", margin: "0 auto" }}>
      <Box display={"flex"} gap={"80px"} alignItems={"center"}>
        <Box>
          <Typography
            variant="h1"
            component="h2"
            fontSize={"60px"}
            fontWeight={"700"}
            lineHeight={"130%"}
            color=" #f9f9f9"
            width={"524px"}
            textAlign={"start"}
            mb={"45px"}
          >
            Новая коллекция ковров Venetta
          </Typography>
          <Button
            variant="contained"
            sx={{
              padding: "13px 38px",
              borderRadius: "10px",
              backgroundColor: "#cb4a4a",
              fontWeight: "700",
              lineHeight: "140%",
              textAlign: "center",
            }}
            disableRipple={true}
          >
            Смотреть все
          </Button>
        </Box>
        <Box display={"flex"} padding={"48px 5 "}>
          <img
            src={HeroImg1}
            alt=""
            width={"303px"}
            height={"396px"}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
          <img
            src={HeroImg2}
            alt=""
            width={"303px"}
            height={"396px"}
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </Container>
  );
};
