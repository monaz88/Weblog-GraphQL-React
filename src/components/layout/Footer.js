import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Typography
      style={{background:"#94bbe9"}}
        component="p"
        variant="p"
        bgcolor="#f7f7f7"
        color="white"
        padding="10px"
        textAlign="center"
        mt={10}
      >
         پروژه GRAPHQL|MATERIAL UI 
      </Typography>
    </footer>
  );
}

export default Footer;
