import { Box, TextField, Typography, Grid, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";
import "./ContactMe.scss";

export default function ContactMe() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
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
            <TextField fullWidth value={name} type="text" onChange={(e) => setName(e.target.value)} label="Name" placeholder="Your name" />
            <TextField fullWidth value={email} type="email" onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="Your email address" />
            <TextField fullWidth value={subject} type="text" onChange={(e) => setSubject(e.target.value)} label="Subject" placeholder="Reason for your message" />
          </Box>
          <Box className="contact-message">
            <TextField fullWidth value={message} onChange={(e) => setMessage(e.target.value)} label="Message" variant="outlined" multiline rows={4} />
            <Button fullWidth type="submit" endIcon={<SendIcon />} className="contact-me-button">
              Send
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
}
