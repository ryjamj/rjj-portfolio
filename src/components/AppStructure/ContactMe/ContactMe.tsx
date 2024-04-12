// import React from "react";
import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./ContactMe.scss";

export default function ContactMe() {
  return (
    <Box id="contact-id" className="contact-section">
      <h2>Contact me...</h2>
      <Grid className="contact-form">
        <Box className="contact-details">
          <TextField fullWidth={true} label="Name" placeholder="Your name" />
          <TextField fullWidth={true} label="Email" placeholder="Your email address" />
          <TextField fullWidth={true} label="Subject" placeholder="Reason for your message" />
        </Box>
        <Box className="contact-message">
          <TextField fullWidth={true} label="Message" variant="outlined" multiline rows={4} />
          <Button fullWidth={true} type="submit" endIcon={<SendIcon />} className="contact-me-button">
            Send
          </Button>
          {/* <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button> */}
        </Box>
      </Grid>
    </Box>
  );
}
