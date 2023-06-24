import React from "react";
import "../../styling/ContactPage.css";

export default function Contact() {
    return (
        <main>
            <div className="contact-form">
                <h1 className="contact-heading">*contact form coming soon*</h1>
                <h2 className="email-heading">
                    In the meantime...
                    <br />
                    <a href="mailto:nsisco@uw.edu">You can email me
                        <button className="round-button">here!</button></a>
                </h2>
            </div>
        </main>
    );
}
