import { Box, IconButton, Rating, Typography } from "@mui/material";
import React from "react";
import HeaderIconLike from "../../../assets/headerLike.svg";
import HeaderIconLikeRed from "../../../assets/likeRed.svg";

export const RugCard = ({
  title,
  img,
  size,
  origin,
  otziv,
  price,
  rs,
  old_price = false,
  new_price = false,
  skidka = false,
}) => {
  const [liked, setLiked] = React.useState(false);
  console.log(old_price, new_price, skidka);
  return (
    <>
      <Box
        sx={{
          width: "310px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        }}
        position={"relative"}
      >
        <Box>
          <Typography
            variant="p"
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"130%"}
            color=" #fff"
            backgroundColor="#618c78"
            padding={"3px 20px"}
            position={"absolute"}
            top={"23px"}
          >
            {skidka || "Новинка"}
          </Typography>
        </Box>

        <IconButton
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          sx={{
            position: "absolute",
            top: "20px",
            right: "10px",
            pointerEvents: "auto",
          }}
        >
          <img
            src={liked ? HeaderIconLikeRed : HeaderIconLike}
            alt=""
            style={{ width: "20px", height: "20px" }}
          />
        </IconButton>
        <Box padding={"68px 57px 20px 57px"}>
          <img src={img} alt="" />
        </Box>
        <Box padding={"0px 20px 20px 20px"}>
          <Typography
            variant="h3"
            fontSize={"18px"}
            fontWeight={"400"}
            lineHeight={"100%"}
            color=" #1d1d1d"
            width={"175px"}
          >
            {title}
          </Typography>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "100%",
              color: " #1d1d1d",
              margin: "8px 0px",
            }}
          >
            Размер: {size}
          </p>
          <p
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "100%",
              color: " #1d1d1d",
              margin: "8px 0px",
            }}
          >
            Производитель: {origin}
          </p>
          <Box display={"flex"} alignItems={"center"} gap={"8px"}>
            <Rating
              onClick={(e) => {
                e.stopPropagation();
              }}
              name="half-rating"
              defaultValue={0}
              precision={0.5}
              sx={{ margin: "8px 0px" }}
            />
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "100%",
                color: " #1d1d1d",
                margin: " 0px",
              }}
            >
              {otziv} отзывов
            </p>
          </Box>
          <Box display={"flex"} gap={"15px"} mt={"20px"}>
            <Box>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: " #1d1d1d",
                  margin: "0px",
                }}
              >
                {old_price ? "Старая цена" : "Цена"}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "20px",
                  lineHeight: "100%",
                  color: " #1d1d1d",
                  margin: "8px 0px 0px 0px",
                  textDecoration: price ? "none" : "line-through",
                }}
              >
                {price || old_price} ₸
              </p>
            </Box>
            <Box>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "140%",
                  color: " #1d1d1d",
                  margin: "0px",
                }}
              >
                {new_price ? "Новая цена" : "В рассрочку"}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  lineHeight: "100%",
                  color: " #1d1d1d",
                  margin: "8px 0px 0px 0px",
                }}
              >
                <span
                  style={
                    new_price
                      ? {
                          padding: "2px 2px",
                          color: "#618c78",
                        }
                      : {
                          padding: "2px 2px",
                          backgroundColor: "#618c78",
                          color: "#fff",
                        }
                  }
                >
                  {rs || new_price} ₸
                </span>{" "}
                х 12 мес
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
