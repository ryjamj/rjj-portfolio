import "./ContactMe.scss";
import React, { useState, useRef } from "react";
import { Box, TextField, Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ContactMe() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const form = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setOpen(true);

    e.preventDefault();
    emailjs.sendForm("service_xicbqns", "template_pz87z9c", form.current!, "MdqOAAwT-x0lz6_-q").then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <Box id="contact-id" className="contact-section">
      <h2>Contact me...</h2>
      <Grid className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <Box className="contact-details">
            <TextField fullWidth value={name} type="text" name="from_name" onChange={(e) => setName(e.target.value)} label="Name" placeholder="Your name" />
            <TextField fullWidth value={email} type="email" name="from_email" onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Your email address" />
          </Box>
          <Box className="contact-message">
            <TextField fullWidth value={message} name="message" onChange={(e) => setMessage(e.target.value)} label="Message" placeholder="Your message" multiline rows={4} />
            <Button fullWidth type="submit" endIcon={<SendIcon />} className="contact-me-button">
              Send
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
              <DialogContent>
                <DialogContentText id="alert-dialog-description">Message Sent!</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>close</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </form>
      </Grid>
    </Box>
  );
}
