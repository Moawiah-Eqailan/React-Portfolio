import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const form = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let valid = true;
        let errorMessages = { name: "", email: "", phone: "" };

        if (formData.name.length < 3) {
            errorMessages.name = "Name must be longer than 2 characters.";
            valid = false;
        }

        if (formData.phone.length < 10 || formData.phone.length > 15) {
            errorMessages.phone = "Phone number must be between 10 and 15 digits.";
            valid = false;
        }

        if (formData.email.length < 10 || formData.email.length > 70) {
            errorMessages.email = "Email must be between 10 and 70 characters.";
            valid = false;
        }

        setErrors(errorMessages);  

        return valid;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; 
        }

        emailjs
        .sendForm(
            'service_690jy0f', 
            'template_888jdvm', 
            form.current,      
            'tKYJ7DL1QI_HXGrO7' 
        )
            .then(
                (result) => {
                    Swal.fire({
                        title: "Message Sent!",
                        text: "Your message has been sent successfully.",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then((result) => {
                        if (result.isConfirmed) {
                             window.location.href = "https://moawiah-eqailan.github.io/React-Portfolio/"; 
                        }
                    });

                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                    });
                },
                (error) => {
                    Swal.fire({
                        title: "Error!",
                        text: "There was an error sending your message. Please try again.",
                        icon: "error",
                        confirmButtonText: "OK",
                    });
                }
            );
    };

    return (
        <section className="card-contact" id="Contact">
            <h2 className="title">Let's work together</h2>
            <div className="Contact">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <input
                            type="text"
                            required
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                        {errors.name && <p className="error">{errors.name}</p>}  
                        
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                        {errors.email && <p className="error">{errors.email}</p>}  
                    </div>

                    <div className="form-row">
    <input
        type="text"
        required
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="form-input"
        pattern="[0-9]*"  
    />
    {errors.phone && <p className="error">{errors.phone}</p>}

                        <input
                            type="text"
                            required
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <textarea
                            name="message"
                            required
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="form-input"
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        Send Message
                    </button>
                </form>
            </div>

            <a className="con-back"
                href="https://moawiah-eqailan.github.io/React-Portfolio/" 
                style={{ color: '#bec8cf', textDecoration: 'none', fontSize: '16px ', padding:'12px' }}
            >
                <i className="fas fa-arrow-left"></i> Back To Home
            </a>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>   
    );
};

export default Contact;
