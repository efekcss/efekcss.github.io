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
    period: "2022 - Present",
    description: "Focusing on statistical analysis, data science methodologies, and machine learning applications.",
  },
  {
    degree: "Data Science Bootcamp",
    school: "Online Learning",
    period: "2023",
    description: "Intensive program covering Python, ML algorithms, and real-world data science projects.",
  },
  {
    degree: "Machine Learning Specialization",
    school: "Coursera",
    period: "2023",
    description: "Advanced coursework in supervised and unsupervised learning, neural networks, and deep learning.",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt="education and learning"
          />
        </div>
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
