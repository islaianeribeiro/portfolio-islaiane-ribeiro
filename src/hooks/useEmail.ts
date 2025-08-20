import { useState } from "react";
import emailjs from "@emailjs/browser";

type StatusType = {
  type: "success" | "error" | null;
  text: string;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function useEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<StatusType>({
    type: null,
    text: "",
  });

  const sendEmail = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    if (!isValidEmail(formData.email)) {
      setStatusMessage({
        type: "error",
        text: "Por favor, insira um e-mail válido.",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatusMessage({
        type: "success",
        text: "Sua mensagem foi enviada com sucesso!",
      });
    } catch (error: unknown) {
      console.error("Erro ao enviar mensagem:", error);

      setStatusMessage({
        type: "error",
        text: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessage({ type: null, text: "" });
      }, 5000);
    }
  };

  return { isLoading, statusMessage, sendEmail };
}
