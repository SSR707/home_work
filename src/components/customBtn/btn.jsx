import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const CustomButton = styled(Button)`
  background-color: #cb4a4a;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: #fff;
  &:hover {
    background-color: #aa3737;
  }
`;

export const SecondaryButton = ({ children, sx, ...props }) => {
  return (
    <CustomButton sx={{...sx}} {...props}>
      {children}
    </CustomButton>
  );
};
