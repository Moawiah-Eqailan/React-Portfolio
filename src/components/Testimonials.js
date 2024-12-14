import React from "react";

function Testimonials() {
    const testimonials = [
        {
            name: "Khalid",
            rating: "⭐️⭐️⭐️⭐️⭐️",
            feedback: "The programming service he provided was excellent. I highly recommend working with him!"
        },
        {
            name: "Sarah",
            rating: "⭐️⭐️⭐️⭐️",
            feedback: "Quick to work and creative, communication was good, but there's always room for improvement."
        },
        {
            name: "Mahmoud",
            rating: "⭐️⭐️⭐️⭐️⭐️",
            feedback: "The project was delivered on time with high quality."
        },
        {
            name: "Laila",
            rating: "⭐️⭐️⭐️⭐️",
            feedback: "The final result was very good, I will definitely work with him again."
        }
    ];

    return (
        <section id="Testimonials">
            <h2 className="title">Testimonials</h2>
            <div className="Contact">
                {testimonials.map((testimonial, index) => (
                    <div className="card" key={index}>
                        <div className="info">
                            <p>
                                <strong>{testimonial.name}:</strong> {testimonial.rating} <br />
                                {testimonial.feedback}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
