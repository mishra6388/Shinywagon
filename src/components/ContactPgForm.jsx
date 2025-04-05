import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPgForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_yv56l9c", // Replace with EmailJS Service ID
        "template_3ju29op", // Replace with EmailJS Template ID
        formData,
        "LT9iXIclXTF04ZcH8" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: "url('https://lh3.googleusercontent.com/KxirWB5K8pCh7prOtzEMVexyGvkCVs2MFT6Q9iNVdOPBwfR5uJtSBD8MFnWk2WGLzLmYkni8QMJiC7cwVGSW=s750')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Optional: Remove the overlay or make it more transparent for better visibility */}
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center mb-6">
          We are here to help! Fill out the form below, and we'll get back to you.
        </p>

        {successMessage && (
          <p className="text-green-400 text-center mb-4">{successMessage}</p>
        )}

        <form className="space-y-4" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-500 rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gray-700 text-white p-3 rounded-md hover:cursor-pointer transition disabled:bg-gray-400 "
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
