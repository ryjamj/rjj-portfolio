import "./ContactMe.scss";
import React, { useState, useRef } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "var(--font-body)",
    backgroundColor: "var(--surface)",
    color: "var(--text-primary)",
    "& fieldset": { borderColor: "var(--border)" },
    "&:hover fieldset": { borderColor: "var(--accent)" },
    "&.Mui-focused fieldset": { borderColor: "var(--accent)" },
  },
  "& .MuiInputLabel-root": { color: "var(--text-secondary)" },
  "& .MuiInputLabel-root.Mui-focused": { color: "var(--accent)" },
};

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
    e.preventDefault();
    emailjs.sendForm("service_xicbqns", "template_pz87z9c", form.current!, "MdqOAAwT-x0lz6_-q").then(
      () => {
        setOpen(true);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <Box id="contact-id" className="contact-section">
      <span className="section-eyebrow">contact</span>
      <h2>Get In Touch</h2>
      <Box className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <Box className="contact-details">
            <TextField
              sx={fieldSx}
              fullWidth
              value={name}
              type="text"
              name="from_name"
              onChange={(e) => setName(e.target.value)}
              label="Name"
              placeholder="Your name"
            />
            <TextField
              sx={fieldSx}
              fullWidth
              value={email}
              type="email"
              name="from_email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Your email address"
            />
          </Box>
          <Box className="contact-message">
            <TextField
              sx={fieldSx}
              fullWidth
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              label="Message"
              placeholder="Your message"
              multiline
              rows={4}
            />
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
      </Box>
    </Box>
  );
}
