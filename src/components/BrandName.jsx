import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const BrandName = () => {
  return (
    <Box>
      <img
        class="fb_logo _8ilh img"
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook"
        style={{ height: "106px" }}
      ></img>
      <Typography variant="subtitle1" pl={5}>
        Connect with friends and the world around you on Facebook.
      </Typography>
    </Box>
  );
};

export default BrandName;
