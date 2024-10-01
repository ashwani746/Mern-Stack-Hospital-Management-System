import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
         title={
          <h1 style={{
            fontSize: "1em",
            fontWeight: "bold",
            color: "#4CAF50", // Nice green color for a medical feel
            // textAlign: "justify",
            // marginTop: "1px",
            // letterSpacing: "1px",
            // animation: "fadeInSlide 2s ease-in-out"
          }}>
            Schedule Your Appointment | DivMedicare Medical Institute
          </h1>
        }
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;