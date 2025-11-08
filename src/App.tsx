"use client";
import "./App.scss";
import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Process from "./components/Process";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Modal from "./components/Modal"; // 👈 neu ausgelagert

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    hasBusiness: "",
    leads: "",
    problem: "",
    understood: "",
    contactMethod: "",
    name: "",
    phone: "",
  });

  // Step Navigation
  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone)
      return alert("Bitte fülle alle Pflichtfelder aus.");

    try {
      const response = await fetch("/api/index.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          setShowModal(false);
          setSuccess(false);
          setStep(1);
          setForm({
            hasBusiness: "",
            leads: "",
            problem: "",
            understood: "",
            contactMethod: "",
            name: "",
            phone: "",
          });
        }, 2500);
      } else {
        alert("Fehler beim Senden. Bitte später erneut versuchen.");
      }
    } catch (err) {
      alert("Serverfehler. Überprüfe deine Verbindung oder den PHP-Mailer.");
    }
  };

  // Intersection Observer Hook (für Animationen)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-left, .slide-right, .slide-up, .scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <Hero setShowModal={setShowModal} />

      {/* VIDEO SECTION optional */}
      {/* <VideoSection /> */}

      {/* BENEFITS */}
      <Benefits />

      {/* PROCESS */}
      <Process />

      {/* CTA */}
      <CTA setShowModal={setShowModal} />

      {/* FAQ */}
      <FAQ />

      {/* FOOTER */}
      <Footer />

      {/* MODAL */}
      <Modal
        show={showModal}
        setShow={setShowModal}
        form={form}
        setForm={setForm}
        step={step}
        setStep={setStep}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        success={success}
      />
    </div>
  );
}
