// import styled from "@emotion/styled";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import { Box } from "@mui/system";
import Add from "./components/Add";
import { useState } from "react";
import { Alert, createTheme, IconButton, Snackbar, ThemeProvider } from "@mui/material";
import { useGlobalContext } from "./Context";
import { Routes,Route } from "react-router-dom";
import Authentication from "./components/Authentication";
import Layout from "./components/Layout";
import Insta from "./components/Insta";
import CloseIcon from "@mui/icons-material/Close";

function App() {


  // const BlueButton=styled(Button)(({theme})=>({
  //   backgroundColor:theme.palette.blue.main
  // }))

  const {dark,setDark}=useGlobalContext()

      const darkTheme = createTheme({
      palette: {
        mode: dark,
      },
    });

 

  return (
  <ThemeProvider theme={darkTheme}>
   <Box>
    <Routes>
    <Route path="/" element={
    <Layout>
    <Insta/>
    </Layout>
  }
    />
    <Route path="/home" element={ 
    <>
    <Navbar/>
    <Box sx={{display:'flex', justifyContent:'space-between'}}>
    <Sidebar dark={dark} setDark={setDark}/>
    <Feed/>
    <Rightbar/>
    </Box>
    <Add/>
       
    </>}/>
   
    </Routes>
   </Box>
   </ThemeProvider>
  );
}

export default App;
