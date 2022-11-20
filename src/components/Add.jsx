import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import {
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCall,
} from "@mui/icons-material";
const Add = () => {
  const [open, setOpen] = useState(false);
  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography varient="h6" color="grey" textAlign={"center"}>
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              alt="friends"
              src="https://i.ytimg.com/vi/I8VI8ehFdEo/maxresdefault.jpg"
              sx={{ height: 30, width: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotions />
            <Image />
            <VideoCall />
            <PersonAdd />
          </Stack>
          <Button variant="contained">Post</Button>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
