/**
 * Education component
 *
 * Highlights your educational background and achievements.
 */

import React from "react";

const educationList = [
  {
    degree: "Bachelor of Statistics",
    school: "Hacettepe University",
    period: "2024 - Present",
    description: "Focusing on statistical analysis, data science methodologies, and machine learning applications.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          <div className="box">
            {educationList.map((education, index) => (
              <div key={index} style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
                <h3 style={{ marginBottom: "0.5rem", color: "#1E3A8A" }}>{education.degree}</h3>
                <h4 style={{ marginBottom: "0.5rem", color: "#666" }}>{education.school}</h4>
                <p style={{ fontWeight: "bold", marginBottom: "0.5rem", color: "#888" }}>{education.period}</p>
                <p>{education.description}</p>
              </div>
            ))}
          </div>
        </div>
       </div>
    </section>
  );
};

export default Education;
