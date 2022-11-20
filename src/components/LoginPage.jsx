import { Box, Button, InputAdornment, Paper, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import styled from "@emotion/styled";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import { Container, height, Stack } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import BrandName from "./BrandName";

const LoginPage = () => {
  const BoxStyled = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
    // border: "1px solid black",
    height: "60vh",
    justifyContent: "center",
    // flex: "4",
  });

  const LogoBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    width: "40%",
    alignItems: "center",
    justifyContent: "flex-start",
  });

  return (
    <>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <LogoBox>
          <BrandName />
        </LogoBox>
        <Paper elevation={3} sx={{ width: "30%", height: "340px" }}>
          <BoxStyled component="form">
            <TextField
              error={false}
              sx={{ width: "calc(100% - 25px)" }}
              required
              placeholder="Enter Your Email"
              label="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              error={false}
              required
              placeholder="Enter Your Password"
              sx={{ width: "calc(100% - 25px)" }}
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EnhancedEncryptionIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              sx={{ width: "325px", bgcolor: "#1877f2" }}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>

            <Typography
              sx={{ cursor: "pointer", color: "#1877f2", fontSize: "14px" }}
            >
              Forgot Password?
            </Typography>

            <Stack justifyContent={"center"}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#42b72a",
                  color: "#fff",
                  width: "210px",
                  height: "48px",
                  fontSize: "14px",
                  padding: "0 10px",
                  margin: " auto",
                }}
              >
                create new account
              </Button>
            </Stack>
          </BoxStyled>
          <Typography sx={{ fontSize: "14px" }} m={2}>
            <span style={{ fontWeight: "bold" }}>Create a Page</span> for a
            celebrity, brand or business.
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LoginPage;
