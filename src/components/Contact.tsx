import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useTranslation } from "../hooks/useTranslation";
import { Alert, CircularProgress } from "@mui/material";

function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<"success" | "error" | null>(
    null
  );

  useEffect(() => {
    if (sendStatus) {
      const timer = setTimeout(() => {
        setSendStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [sendStatus]);

  useEffect(() => {
    if (nameError || emailError || messageError) {
      const timer = setTimeout(() => {
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [nameError, emailError, messageError]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isNameInvalid = name === "";
    const isEmailInvalid = email === "";
    const isMessageInvalid = message === "";

    setNameError(isNameInvalid);
    setEmailError(isEmailInvalid);
    setMessageError(isMessageInvalid);

    if (isNameInvalid || isEmailInvalid || isMessageInvalid) {
      return;
    }

    if (form.current) {
      setIsSending(true);
      setSendStatus(null);

      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("E-mail enviado com sucesso!", result.text);
            setIsSending(false);
            setSendStatus("success");
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.error("Falha ao enviar e-mail:", error.text);
            setIsSending(false);
            setSendStatus("error");
          }
        );
    }
  };

  return (
    <div id="contact" data-aos="fade-up">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>{t.contactMeTitle}</h1>
          <Box
            ref={form as React.RefObject<HTMLFormElement>}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
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
                name="name"
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
                name="email"
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label={t.messagePlaceholder || "Message"}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              name="message"
            />
            <Box sx={{ display: "flex", alignItems: "center", float: "right" }}>
              {isSending && <CircularProgress size={24} sx={{ mr: 2 }} />}
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={isSending}
              >
                {t.sendEmail}
              </Button>
            </Box>

            {sendStatus === "success" && (
              <Alert severity="success" sx={{ mt: 2, width: "50%" }}>
                Mensagem enviada com sucesso!
              </Alert>
            )}
            {sendStatus === "error" && (
              <Alert severity="error" sx={{ mt: 2, width: "50%" }}>
                Falha ao enviar. Tente novamente mais tarde.
              </Alert>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
