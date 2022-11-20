import React, { useContext, createContext, useState, useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { createTheme, Switch } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";
const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [dark, setDark] = useState("light");
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState({ Email: "", Password: "" });
  const [Error, setError] = useState({
    emailError: false,
    passwordError: false,
  });
  const [placeholder, setPlaceholder] = useState({
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
  });

  const [signUp, setSignUp] = useState({
    Emails: "",
    Passwords: "",
    Confirms: "",
  });
  const [open, setOpen] = useState(false);

  const [snack, setSnack] = useState(false);

  const [alerts, setAlert] = useState({
    type: "",
    message: "",
  });

  const handleAuth = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleChecked = () => {
    setChecked(!checked);
    if (checked) {
      setDark("light");
    } else {
      setDark("dark");
    }
  };

  const handleLogin = async () => {
    if (input.Email === "" && input.Password === "") {
      setError({ ...Error, emailError: true, passwordError: true });
      setPlaceholder({
        ...placeholder,
        emailPlaceholder: "Email cannot be empty",
        passwordPlaceholder: "password cannot be empty",
      });
    } else if (input.Email === "") {
      setError({ ...Error, emailError: true });
      setPlaceholder({
        ...placeholder,
        emailPlaceholder: "Please insert Email",
      });
    } else if (input.Password === "") {
      setError({ ...Error, passwordError: true });
      setPlaceholder({
        ...placeholder,
        passwordPlaceholder: "please insert password",
      });
    } else {
      try {
        const result = await signInWithEmailAndPassword(
          auth,
          input.Email,
          input.Password
        );
        navigate("/home");
        setSnack(true);
        setAlert({
          ...alerts,
          type: "success",
          message: `Log in successful Welcome ${result.user.email}`,
        });
      } catch (error) {
        setSnack(true);
        setAlert({ ...alerts, message: error.message, type: "error" });
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  // useEffect(() => {
  //   handleLogin();
  // }, [placeholder.emailPlaceholder, placeholder.passwordPlaceholder]);

  const handleSignUpInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignUp({ ...signUp, [name]: value });
  };

  const handleSignUpSubmit = async () => {
    if (signUp.Passwords !== signUp.Confirms) {
      setSnack(true);
      setAlert({
        ...alerts,
        type: "error",
        message: "Password did not  match",
      });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        signUp.Emails,
        signUp.Passwords
      );
      console.log(result);
      setSnack(true);
      setAlert({
        ...alerts,
        type: "success",
        message: `Sign Up successful Welcome ${result.user.email}`,
      });
      setOpen(false);
      // navigate("/home");
    } catch (error) {
      setAlert({ ...alerts, message: error.message, type: "error" });
    }
  };

  const handleSnackClose = () => {
    setSnack(false);
  };

  const sideBarList = [
    { text: "Homepage", icon: <HomeIcon /> },
    { text: "Pages", icon: <PagesIcon /> },
    { text: "Groups", icon: <GroupsIcon /> },
    { text: "Marketplace", icon: <StorefrontIcon /> },
    { text: "Friends", icon: <PeopleIcon /> },
    { text: "Settings", icon: <SettingsIcon /> },
    { text: "Profile", icon: <AccountBoxIcon /> },
    {
      text: <Switch checked={checked} onChange={handleChecked} />,
      icon: <DarkModeIcon />,
    },
  ];

  return (
    <AppContext.Provider
      value={{
        sideBarList,
        dark,
        setDark,
        input,
        setInput,
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
        open,
        handleClose,
        setOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
