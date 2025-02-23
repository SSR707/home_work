import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS } from "../../config/conlor";
import HeroImg1 from "../../assets/hero.img-1.svg";
import HeroImg2 from "../../assets/hero.img-2.svg";
import { SecondaryButton } from "../../components/customBtn/btn";
import { Sectionn } from "./components/section";

export const Home = () => {
  return (
    <>
      <section>
        <Box bgcolor={COLORS.primary} py={"98px"}>
          <Container maxWidth="xl">
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box maxWidth={"524px"}>
                <Typography
                  mb={"32px"}
                  fontWeight={700}
                  fontSize={60}
                  color="#fff"
                >
                  Новая коллекция ковров Venetta
                </Typography>
                <SecondaryButton>Смотреть все</SecondaryButton>
              </Box>
              <Stack direction={"row"}>
                <img src={HeroImg1} alt="img" />
                <img src={HeroImg2} alt="img" />
              </Stack>
            </Stack>
          </Container>
        </Box>
      </section>
      <section style={{ paddingTop: "100px" }}>
        <Sectionn title={"Новинки"} text={"Все новинки"} />
      </section>
      <section style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <Sectionn title={"Скидки"} text={"Все скидки"} isChek={true} />
      </section>
    </>
  );
};
