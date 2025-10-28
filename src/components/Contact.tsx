import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useTranslation } from "../hooks/useTranslation";

function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === "");
    setEmailError(email === "");
    setMessageError(message === "");
  };

  return (
    <div id="contact" data-aos="fade-up">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.contactMeTitle}</h1>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label={t.namePlaceholder}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
              />
              <TextField
                required
                id="outlined-required"
                label={t.emailphonePlaceholder}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              // MUDEI AQUI: de "Message" para t.messagePlaceholder
              label={t.messagePlaceholder || "Message"}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              // O estilo do botão agora vem do SCSS
            >
              {t.sendEmail}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
