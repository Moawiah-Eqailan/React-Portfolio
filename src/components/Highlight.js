import React from "react";

function Highlight() {
    const highlights = [
        "Strong communication and teamwork skills.",
        "Proficient problem solver, adept at collaborating with diverse teams.",
        "Quick learner, open to feedback, and committed to continuous growth.",
        "Skilled in time management, organization, and task prioritization."
    ];

    return (
        <section id="Highlight">
            <h2 className="title">Highlight</h2>
            <div className="Contact">
                {highlights.map((text, index) => (
                    <div className="card" key={index}>
                        <div className="info">
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Highlight;
