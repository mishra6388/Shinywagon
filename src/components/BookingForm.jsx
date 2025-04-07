import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BookingForm = ({ setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yv56l9c",
        "template_qwcge8t",
        formData,
        "LT9iXIclXTF04ZcH8"
      )
      .then(
        (response) => {
          toast.success("Booking request sent successfully!");
          setIsOpen(false);
        },
        (error) => {
          toast.error("Failed to send booking request. Please try again.");
          console.log("FAILED...", error);
        }
      );
      
      
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        {/* ❌ Close Button */}
        <span onClick={() => setIsOpen(false)} style={styles.crossIcon}>
          &times;
        </span>

        <h2 style={styles.heading}>Enquiry about ShinyWagon </h2>
        <form onSubmit={sendEmail} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (10 digits)"
            pattern="[0-9]{10}"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            required
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="message"
            placeholder="Enter your message"
            required
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit"  style={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  popup: {
    position: "relative",
    background: "#fff",
    padding: "30px 20px 20px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    color: "#000",
  },
  crossIcon: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    color: "#333",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    color: "#000",
  },
  submitButton: {
  background: "#007bff",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  fontWeight: "bold",
  cursor: "pointer", // ✅ this is correct
},

  
};
