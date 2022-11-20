import styled from "@emotion/styled";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Divider,
  Modal,
  IconButton,
  Alert,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import Image from "../assets/screenshot3.png";
import { useGlobalContext } from "../Context";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";

const Insta = () => {
  const {
    input,
    handleAuth,
    handleLogin,
    Error,
    placeholder,
    signUp,
    handleSignUpInput,
    handleSignUpSubmit,
    snack,
    handleSnackClose,
    alerts,
    handleClose,
    open,
    setOpen,
  } = useGlobalContext();

  const StyledContainer = styled(Container)({
    display: "flex",
    justifyContent: "space-evenly",
    height: "100vh",
    alignItems: "center",
  });

  const StyledPaper = styled(Paper)({
    display: "flex",
    flexDirection: "column",
    gap: 15,
    width: "350px",
    height: "450px",
  });

  const action = (
    <div>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );

  return (
    <StyledContainer>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img src={Image} alt="instagram" />
      </Box>
      <StyledPaper square={true} sx={{ border: "1px solid rgb(219,219,219)" }}>
        <Stack alignItems="center" direction={"column"} sx={{ p: 4 }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            alt="instagram"
            style={{ height: "51px", width: "175px" }}
          />
        </Stack>
        <Stack direction={"column"} alignItems="center" gap={1}>
          <TextField
            placeholder={placeholder.emailPlaceholder}
            sx={{
              width: "300px",
              backgroundColor: "#cccccc30",
              fontSize: 1,
            }}
            defaultValue={input.Email}
            onBlur={handleAuth}
            name="Email"
            error={Error.emailError}
          />
          <TextField
            placeholder={placeholder.passwordPlaceholder}
            sx={{ width: "300px", backgroundColor: "#cccccc30" }}
            defaultValue={input.Password}
            onBlur={handleAuth}
            name="Password"
            error={Error.passwordError}
          />
          <Button
            variant="contained"
            sx={{ width: "300px", mt: 1 }}
            onClick={handleLogin}
          >
            Log In
          </Button>
        </Stack>
        <Divider variant="middle">OR</Divider>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ color: "#385185", cursor: "pointer" }}
          gap={1}
        >
          <FacebookIcon />
          <Typography fontSize={"14px"} fontWeight={"600"}>
            Log in with facebook
          </Typography>
        </Stack>
        <Typography
          fontSize={"12px"}
          textAlign="center"
          sx={{ color: "#385185", cursor: "pointer" }}
          onClick={() => setOpen(true)}
        >
          Dont have account? Sign Up
        </Typography>
        <Typography
          fontSize={"12px"}
          textAlign="center"
          sx={{ color: "#385185", cursor: "pointer" }}
        >
          Forgot password?
        </Typography>
      </StyledPaper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 450,
            bgcolor: "#f4f4f4",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Stack alignItems="center" direction={"column"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
              alt="instagram"
              style={{ height: "51px", width: "175px" }}
            />
            <Typography textAlign={"center"} sx={{ opacity: "0.5" }}>
              Sign up to see photos and videos from your friends.
            </Typography>
          </Stack>
          <Stack p={2} gap={1.5}>
            <TextField
              placeholder="Enter Your Email"
              name="Emails"
              defaultValue={signUp.Emails}
              onBlur={handleSignUpInput}
            />
            <TextField
              placeholder="Enter Your Password"
              name="Passwords"
              defaultValue={signUp.Passwords}
              onBlur={handleSignUpInput}
            />
            <TextField
              placeholder="Confirm Your Password"
              name="Confirms"
              defaultValue={signUp.Confirms}
              onBlur={handleSignUpInput}
            />
            <Button variant="contained" onClick={handleSignUpSubmit}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Snackbar
        open={snack}
        autoHideDuration={3000}
        onClose={handleSnackClose}
        action={action}
      >
        <Alert severity={alerts.type} variant="filled">
          {alerts.message}
        </Alert>
      </Snackbar>
    </StyledContainer>
  );
};

export default Insta;
