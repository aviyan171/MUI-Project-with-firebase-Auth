import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGlobalContext } from "../Context";

const Sidebar = () => {
  const { sideBarList } = useGlobalContext();
  return (
    <Box sx={{ flex: 1, display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List>
          {sideBarList.map((lists, index) => {
            return (
              <ListItem disablePadding key={index}>
                <ListItemButton href="#">
                  <ListItemIcon>{lists.icon}</ListItemIcon>
                  <ListItemText primary={lists.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
