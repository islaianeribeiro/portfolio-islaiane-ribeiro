"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Mensagem enviada com sucesso:", result.text);
          setStatusMessage({
            type: "success",
            text: "Sua mensagem foi enviada com sucesso!",
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatusMessage({ type: null, text: "" }), 5000);
        },
        (error) => {
          console.error("Erro ao enviar a mensagem:", error.text);
          setStatusMessage({
            type: "error",
            text: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
          });
          setTimeout(() => setStatusMessage({ type: null, text: "" }), 5000);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2">
      <h2 className="text-2xl md:text-3xl text-center text-dark dark:text-light mb-6">
        QUER ME <span className="text-accent">CONTATAR?</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-full text-dark dark:text-light">
        <form
          className="mx-5 md:mx-auto text-center w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between flex-wrap mb-5">
            <CustomInput
              id="name"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
            />

            <CustomInput
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <CustomTextarea
            id="message"
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              text={isLoading ? "Enviando..." : "Enviar mensagem"}
              className="flex justify-center items-center p-2.5 bg-accent text-light border-0 rounded-md cursor-pointer no-underline hover:scale-102 hover:bg-white hover:text-accent"
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
      {statusMessage.type && (
        <div
          className={`mt-4 flex justify-center text-center py-3 px-4 rounded-lg font-medium transition-opacity duration-500 z-10 ${
            statusMessage.type === "success"
              ? "bg-green-100 text-green-800 border border-green-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {statusMessage.text}
        </div>
      )}
    </div>
  );
}
