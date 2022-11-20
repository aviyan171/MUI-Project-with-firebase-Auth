import React from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Abhiyan Pic"
            src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/279829016_2497365347071775_1735690724712610857_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Vxd9jgiWfEAX_xBEV3&_nc_ht=scontent.fktm7-1.fna&oh=00_AfDZAfHzCzTwhfkec3rMLTW34Q-dJ4L2Gyt7JLXE72FmnQ&oe=636B9927"
          />
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Abhiyan Upreti"
        subheader="November 26, 2001"
      />
      <CardMedia
        component="img"
        height={350}
        image="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-6/282128728_2519606994847610_6448412214231163159_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=MCDI9sRIrPkAX-Z-iPs&_nc_ht=scontent.fktm7-1.fna&oh=00_AfAatZaTSID6z5Tqcp-pnMOUERxFx_vSWWwgelQ1CFBNjQ&oe=636C7E06"
        alt="Abhiyan Pic"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex
          modi sapiente molestiae est ratione aliquid quas quam explicabo rem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          totam!
        </Typography>
      </CardContent>
      <CardActionArea>
        <IconButton>
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red.main" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActionArea>
    </Card>
  );
};

export default Post;
