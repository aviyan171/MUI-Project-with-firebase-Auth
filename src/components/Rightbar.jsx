import styled from "@emotion/styled";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  const AvatarContainer = styled("div")({
    display: "flex",
    gap: 3,
  });

  return (
    <Box
      sx={{
        flex: 2,
        display: { xs: "none", sm: "block" },
        p: 2,
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>

        <AvatarGroup max={7} spacing={2}>
          <Avatar
            alt="friends"
            src="https://i.ytimg.com/vi/I8VI8ehFdEo/maxresdefault.jpg"
          />
          <Avatar
            alt="friends"
            src="https://www.the-sun.com/wp-content/uploads/sites/6/2021/07/NINTCHDBPICT000668323573.jpg"
          />
          <Avatar
            alt="friends"
            src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/08/27/16616247229924.png"
          />
          <Avatar
            alt="friends"
            src="https://i.pinimg.com/736x/69/3c/c2/693cc2e711d7d486947522fd13ff4191--sexy-women-sexy-girls.jpg"
          />
          <Avatar
            alt="friends"
            src="https://pbs.twimg.com/profile_images/1314576714173943816/HeqDdbXP_400x400.jpg"
          />
          <Avatar
            alt="friends"
            src="https://m.media-amazon.com/images/M/MV5BZjFmMDUxZTYtZjMwNi00MTliLTk3NzQtN2FlMDI3M2VlMjgxXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR141,0,630,1200_AL_.jpg"
          />
          <Avatar
            alt="friends"
            src="https://m.media-amazon.com/images/M/MV5BZWE4MjE2OTMtMGNkMi00OTAzLWE5ZWItYmQ3YmJkYzkyMTUxL2ltYWdlXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UY1200_CR130,0,630,1200_AL_.jpg"
          />
          <Avatar
            alt="friends"
            src="https://c8.alamy.com/comp/R0HMK7/november-04-2018-kendra-lust-attend-exxxotica-2018-at-new-jersey-convention-exposition-center-november-04-2018-creditrwmediapunch-R0HMK7.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" sx={{ marginTop: 2, mb: 2 }}>
          Latest Photos
        </Typography>
        <ImageList cols={3} gap={5} rowHeight={100}>
          <ImageListItem>
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/286981480_2527721990702777_2545295202276089267_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=sW0Rg1BVHvYAX_W5VRM&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDc9JvCuWYhKnFiirAAZXTrE04z0nS5apCzeMvqgxK-pg&oe=636E3E02" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/279829016_2497365347071775_1735690724712610857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yuLfYamBYeUAX9PyxGy&_nc_ht=scontent.fktm10-1.fna&oh=00_AfCn_8dcZPv5srIhWOqHP-rJ2KyzutFqSr915SjMRdiygQ&oe=636D9367" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://scontent.fktm10-1.fna.fbcdn.net/v/t1.6435-9/172713475_2190099291131717_8327347791355275804_n.jpg?stp=dst-jpg_p180x540&_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=aRyVjxS-kdMAX_o001J&tn=_Vw5atsYCTB1yzTP&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDmq9BADT0EkGOVx4UN15j82IVlz1LuqfCQF1Xio2DuUw&oe=639019C7" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://m.media-amazon.com/images/M/MV5BZjFmMDUxZTYtZjMwNi00MTliLTk3NzQtN2FlMDI3M2VlMjgxXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY1200_CR141,0,630,1200_AL_.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary=" I am sooo bored !!"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    Emily Wills
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://i.pinimg.com/736x/69/3c/c2/693cc2e711d7d486947522fd13ff4191--sexy-women-sexy-girls.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary=" I am sooo bored !!"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    Kendra Lust
                  </Typography>
                  {" — Are you okay?"}
                </>
              }
            />
          </ListItem>
          <Divider />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src="https://i.pinimg.com/736x/69/3c/c2/693cc2e711d7d486947522fd13ff4191--sexy-women-sexy-girls.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary=" I am sooo bored !!"
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    varient="body2"
                    color="text.primary"
                  >
                    Kendra Lust
                  </Typography>
                  {" — Are you okay?"}
                </>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
