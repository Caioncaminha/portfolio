import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { useTranslation } from "../hooks/useTranslation";
import { Alert, CircularProgress } from "@mui/material";

// Funções de validação
const validateName = (name: string): string | null => {
  if (name.trim().length < 3) {
    return "Nome deve ter pelo menos 3 letras.";
  }
  if (/\d/.test(name)) {
    return "Nome não pode conter números.";
  }
  return null; // Sem erro
};

const validateEmailOrPhone = (emailOrPhone: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{11,}$/; // Apenas números, mínimo 11 dígitos
  const cleanedInput = emailOrPhone.replace(/\D/g, ""); // Remove não-dígitos para testar telefone

  if (emailRegex.test(emailOrPhone)) {
    return null; // É um email válido
  }
  if (phoneRegex.test(cleanedInput)) {
    return null; // É um número de telefone válido (após limpar)
  }

  return "Por favor, insira um email válido ou um telefone com pelo menos 11 dígitos.";
};

const validateMessage = (message: string): string | null => {
  if (message.trim().length < 10) {
    return "Mensagem deve ter pelo menos 10 caracteres.";
  }
  return null; // Sem erro
};

function Contact() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement | null>(null); // Tipo corrigido
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Estados para mensagens de erro
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);

  const [isSending, setIsSending] = useState<boolean>(false);
  const [sendStatus, setSendStatus] = useState<"success" | "error" | null>(
    null
  );

  // Limpa o status de envio após 3 segundos
  useEffect(() => {
    if (sendStatus) {
      const timer = setTimeout(() => {
        setSendStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [sendStatus]);

  // Limpa os erros individuais ao digitar (opcional, mas melhora UX)
  useEffect(() => {
    if (name) setNameError(null);
  }, [name]);
  useEffect(() => {
    if (email) setEmailError(null);
  }, [email]);
  useEffect(() => {
    if (message) setMessageError(null);
  }, [message]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar campos
    const nameValidationError = validateName(name);
    const emailValidationError = validateEmailOrPhone(email);
    const messageValidationError = validateMessage(message);

    setNameError(nameValidationError);
    setEmailError(emailValidationError);
    setMessageError(messageValidationError);

    // Se houver algum erro, não envia
    if (nameValidationError || emailValidationError || messageValidationError) {
      return;
    }

    if (form.current) {
      setIsSending(true);
      setSendStatus(null);

      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("E-mail enviado com sucesso!", result.text);
            setIsSending(false);
            setSendStatus("success");
            // Limpa o formulário após o sucesso
            setName("");
            setEmail("");
            setMessage("");
            form.current?.reset(); // Reseta o formulário HTML
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
            ref={form} // Ref aplicado aqui
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-name" // ID único
                label={t.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!nameError} // Transforma string de erro em booleano para a prop 'error'
                helperText={nameError} // Exibe a mensagem de erro
                name="name" // Mantém o name para EmailJS
              />
              <TextField
                required
                id="outlined-email-phone" // ID único
                label={t.emailphonePlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                name="email" // Mantém o name para EmailJS (ou pode ser 'from_contact')
              />
            </div>
            <TextField
              required
              id="outlined-message" // ID único
              label={t.messagePlaceholder || "Message"}
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!messageError}
              helperText={messageError}
              name="message" // Mantém o name para EmailJS
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                float: "right",
                mt: 1,
              }}
            >
              {" "}
              {/* Adicionado mt: 1 para espaço */}
              {sendStatus === "success" && (
                <Alert severity="success" sx={{ mr: 2, width: "auto" }}>
                  {" "}
                  {/* Ajustado width e adicionado mr */}
                  Mensagem enviada!
                </Alert>
              )}
              {sendStatus === "error" && (
                <Alert severity="error" sx={{ mr: 2, width: "auto" }}>
                  {" "}
                  {/* Ajustado width e adicionado mr */}
                  Falha ao enviar.
                </Alert>
              )}
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

            {/* Movido os Alertas para perto do botão para melhor layout */}
            {/* Removido espaço redundante aqui */}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
