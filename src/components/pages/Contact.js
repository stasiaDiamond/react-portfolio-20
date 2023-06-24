import React, { useState } from "react";
import "../../styling/ContactPage.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        nameError: "",
        emailError: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check for required fields
        let nameError = "";
        let emailError = "";
        if (formData.name.trim() === "") {
            nameError = "Name is required";
        }
        if (formData.email.trim() === "") {
            emailError = "Email is required";
        }

        // Check for valid email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email.trim())) {
            emailError = "Invalid email address";
        }

        if (nameError || emailError) {
            setFormData({ ...formData, nameError, emailError });
        } else {
            // Handle form submission here
            console.log("Form submitted:", formData);
            // Reset form data
            setFormData({ name: "", email: "", message: "", nameError: "", emailError: "" });
        }
    };

    return (
        <main>
            <div className="contact-form">
                <h1>*contact form under construction*</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {formData.nameError && <p className="error-message">{formData.nameError}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {formData.emailError && <p className="error-message">{formData.emailError}</p>}

                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>

                <div className="email-me">
                    <h2>
                        In the meantime... <a href="mailto:nsisco@uw.edu">you can email me</a>
                    </h2>
                </div>
            </div>
        </main>
    );
}
