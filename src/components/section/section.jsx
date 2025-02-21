import { Box, Container, Typography } from "@mui/material";
import { Slider } from "./slider";

export const Sectionn = ({ title, text, isChek }) => {
  return (
    <Container>
      <Box
        display={"flex"}
        gap={"32px"}
        alignItems={"center"}
        position={"relative"}
      >
        <Typography
          variant="h3"
          fontSize={"40px"}
          fontWeight={"700"}
          lineHeight={"130%"}
          color=" #1d1d1d"
          mb={"29px"}
        >
          {title}
        </Typography>
        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "140%",
            color: " #648e7a",
            margin: " 0px 0px 15px 0px",
          }}
        >
          {" "}
          {text}
        </p>
      </Box>
      <Box position={'relative'}>
        <Slider skidka={isChek}  />
      </Box>
    </Container>
  );
};
