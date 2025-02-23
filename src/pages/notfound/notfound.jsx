import { Box, Container, Typography } from "@mui/material";
export const NotFound = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "100%",
            color: "#000",
            paddingTop: "100px",
          }}
        >
          По Вашему запросу ничего не найдень?
        </Typography>
      </Container>
    </Box>
  );
};
