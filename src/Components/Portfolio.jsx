/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */


/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Open Passwd v0.1",
    description:
      "Terminal üzerinden çalışan basit bir yerel parola yöneticisi. AES şifreleme ile güvenli parola saklama, parola üretme ve yönetme desteği sunar.",
    url: "https://github.com/efekcss/open-passwd_v0.1",
  },
  {
    title: "App Timer",
    description:
      "Windows app timer and blocker for battle with screen addiction. Focus on more important things with this productivity tool.",
    url: "https://github.com/efekcss/app_timer",
  },
  {
    title: "Data Science Portfolio",
    description:
      "Collection of data science projects including machine learning models, statistical analysis, and data visualizations using Python and R.",
    url: "#", // Gerçek proje URL'nizi buraya ekleyin
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
