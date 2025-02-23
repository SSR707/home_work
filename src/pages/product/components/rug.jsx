import {
  Box,
  Button,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { COLORS } from "../../../config/conlor";
import Rug1 from "../../../assets/rug1.svg";
import Rug2 from "../../../assets/rug2.svg";
import { SecondaryButton } from "../../../components/customBtn/btn";
import { useEffect, useState } from "react";
import LikeIcon from "../img/onLike.svg";
import UnlikeIcon from "../img/noLike.svg";
import BackIcon from "../img/backIcon.svg";
import CarIcon from "../img/carIcon.svg";
import WhatsapIcon from "../img/whatsap.svg";
import { data } from "../../../data/data";

const CustomLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: ${COLORS.titleColor};

  &:hover {
    color: ${COLORS.primary};
  }
`;

const CustomLinkInfo = styled(Link)`
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;
  text-decoration: none;
  color: ${COLORS.primary};
`;

const CustomTypographyTitle = styled(Typography)`
  font-weight: 500;
  font-size: 40px;
  line-height: 145%;
  color: ${COLORS.titleColor};
`;

const CustomTypographyInfo = styled(Typography)`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${COLORS.greyText};
`;
export const Rugs = ({ id }) => {
  const [rugs, setRugs] = useState({});
  const [selectedImg, setSelectedImg] = useState(rugs?.previewImg?.[0] || Rug2);
  const [isLikeChek, setLikeChek] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const rug_data = data.find((item) => item.id === +id);
    if (rug_data.title) {
      setRugs(rug_data);
    }
  }, [id]);
  return (
    <>
      <Box
        gap={"16px"}
        sx={{ borderBottom: `1px solid  ${COLORS.greyText}` }}
        paddingBottom={"16px"}
      >
        <CustomLink to={"/"}>Главная</CustomLink>/<CustomLink>Ковры</CustomLink>
        /<CustomLink>{rugs.title}</CustomLink>
        <Box gap={"8px"}>
          <CustomTypographyTitle>{rugs.title}</CustomTypographyTitle>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
              <Stack direction={"row"} gap={"9px"} alignItems={"center"}>
                <Rating name="disabled" value={parseFloat(rugs?.otziv) || 0} precision={0.5} disabled />
                <CustomTypographyInfo>
                  {rugs.otziv} отзывов
                </CustomTypographyInfo>
              </Stack>
              <CustomTypographyInfo>
                В наличии: {rugs.rugCount} штук
              </CustomTypographyInfo>
            </Stack>
            <CustomTypographyInfo>Код товара: {rugs.code}</CustomTypographyInfo>
          </Stack>
        </Box>
      </Box>
      <Stack
        paddingTop={"24px"}
        paddingBottom={"100px"}
        direction={"row"}
        gap={"36px"}
      >
        <Stack direction={"row"} gap={"40px"}>
          <Stack gap={"40px"}>
            {rugs?.previewImg?.map((item, index) => (
              <Box width={"180px"} height={"180px"} key={index}>
                <img
                  src={item}
                  alt=""
                  onClick={() => setSelectedImg(item)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </Box>
            ))}
          </Stack>
          <Box width={"620px"} height={"626px"} position={"relative"}>
            <img
              src={selectedImg}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
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
                {rugs.skidka || "Новинка"}
              </Typography>
            </Box>
          </Box>
        </Stack>
        <Stack gap={"32px"}>
          <Stack direction={"row"} gap={"47px"}>
            <Box textAlign={"start"}>
              <CustomTypographyInfo>Цена:</CustomTypographyInfo>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "40px",
                  lineHeight: "145%",
                  color: COLORS.titleColor,
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                }}
                marginBottom={"23px"}
              >
                {rugs.price || rugs.new_price} ₸
              </Typography>
              <CustomTypographyInfo display={"flex"} marginBottom={"16px"}>
                Размер:
                <CustomTypographyInfo sx={{ color: COLORS.titleColor }}>
                  {rugs.size} см
                </CustomTypographyInfo>
              </CustomTypographyInfo>
              <CustomLinkInfo>Перейти к описанию</CustomLinkInfo>
            </Box>
            <Box textAlign={"start"}>
              <CustomTypographyInfo>В рассрочку:</CustomTypographyInfo>
              <Typography
                marginBottom={"21px"}
                sx={{
                  fontWeight: "500",
                  fontSize: "40px",
                  lineHeight: "145%",
                  color: COLORS.primary,
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                }}
              >
                {rugs.rs} ₸
              </Typography>
              <CustomTypographyInfo
                display={"flex"}
                gap={"16px"}
                alignItems={"center"}
                marginBottom={"15px"}
              >
                Количество:
                <Stack direction={"row"} gap={"7px"} alignItems={"center"}>
                  <IconButton
                    onClick={() => setCount(count - 1)}
                    sx={{
                      width: "17px",
                      height: "17px",
                      textAlign: "center",
                      bgcolor: COLORS.primary,
                      padding: "9px 11px 13px 11px ",
                      color: "white",
                    }}
                  >
                    -
                  </IconButton>
                  <Typography>{count}</Typography>
                  <IconButton
                    onClick={() => setCount(count + 1)}
                    sx={{
                      width: "17px",
                      height: "17px",
                      textAlign: "center",
                      bgcolor: COLORS.primary,
                      padding: "11px",
                      color: "white",
                    }}
                  >
                    +
                  </IconButton>
                </Stack>
              </CustomTypographyInfo>
              <CustomLinkInfo>Подробнее о рассрочке</CustomLinkInfo>
            </Box>
          </Stack>
          <Stack direction={"row"} gap={"30px"}>
            <SecondaryButton
              sx={{
                padding: "13px 100px",
                borderRadius: "10px",
              }}
            >
              В корзину
            </SecondaryButton>
            <Button
              onClick={() => setLikeChek(!isLikeChek)}
              sx={{
                padding: "17px 15px 15px 16px",
                borderRadius: "10px",
                border: isLikeChek ? "none" : `1px solid  ${COLORS.greyText}`,
                bgcolor: isLikeChek ? COLORS.danger : "white",
              }}
            >
              <img src={isLikeChek ? LikeIcon : UnlikeIcon} alt="" />
            </Button>
          </Stack>
          <Stack
            gap={"20px"}
            padding={"21px"}
            sx={{
              boxShadow: "0 0 7px 0 rgba(0, 0, 0, 0.1)",
            }}
          >
            <CustomTypographyInfo
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <img src={BackIcon} alt="" />
              Возврат в течение 14 дней
            </CustomTypographyInfo>
            <CustomTypographyInfo
              display={"flex"}
              alignItems={"center"}
              gap={"10px"}
            >
              <img src={CarIcon} alt="" />
              Среднее время доставки 2.5 дня
            </CustomTypographyInfo>
            <CustomLinkInfo>Подробнее</CustomLinkInfo>
          </Stack>
          <Box>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "140%",
                color: COLORS.titleColor,
                width: "334px",
              }}
            >
              Нужна помощь с выбором? Просто напишите нам в WhatsApp и мы
              обязательно вам поможем!
            </Typography>
            <Button
              sx={{
                padding: "13px 89px",
                borderRadius: "10px",
                bgcolor: COLORS.primary,
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "140%",
                textAlign: "center",
                color: "#fcfcfc",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <img src={WhatsapIcon} alt="" />
              Написать
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
