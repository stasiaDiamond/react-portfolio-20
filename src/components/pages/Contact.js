import React from "react";
import "../../styling/ContactPage.css";

export default function Contact() {
    return (
        <main>
            <div className="contact-form">
                <h1>*contact form under construction*</h1>

                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>

                    <button type="submit">Submit</button>
                </form>

                <div className="email-me">
                    <h2>
                        In the meantime...
                        <a href="mailto:nsisco@uw.edu">you can email me
                            <button>here!</button></a>
                    </h2>
                </div>
            </div>
        </main>
    );
}

