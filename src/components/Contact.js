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

    const form = useRef(null);  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

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
                            
                            window.location.href = "/"; 
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
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
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
                        />
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
           {/* <Link 
    to="/" 
    style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
    }}
    onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} 
    onMouseLeave={(e) => (e.target.style.backgroundColor = "#007BFF")}
>
    Back To Home
</Link> */}
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
