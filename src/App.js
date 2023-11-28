import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const fadeTextRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (fadeTextRef.current) {
      observer.observe(fadeTextRef.current);
    }

    // Cleanup observer on component unmount
    return () => {};
  }, []); // Run once on component mount

  return (
    <div className="App">
      <header className="App-header" id="home">
        <div className="navbar">
          <div className="fix-left">
            <a href="#home" className="fix-left">
              Home
            </a>
          </div>

          <div>
            <a href="#work">Work</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="image-container">
          <img src="/cooper.jpg" alt="cooper" className="cooper-image" />
          <div
            ref={fadeTextRef}
            className={`fade-in ${isVisible ? "visible" : ""}`}
          >
            <h1 className="overlay-text">Welcome</h1>
            <h1 className="overlay-text">To My</h1>
            <h1 className="overlay-text">Website</h1>
          </div>
        </div>
      </header>
      <div className="work" id="work">
        <h1>Work</h1>
        <div className="work-content">
          <div className="company-container">
            <h3>Brightvine</h3>
            <a href="https://www.brightvine.com/">
              <img
                src={"/brightvine.png"}
                alt={"brightvine"}
                className="bv-img"
              />
            </a>
          </div>
          <div className="text-container">
            <h3>Software Engineer</h3>
            <p>
              Brightvine is a FinTech company that enables clients to sell and
              finance assets faster, cheaper, and easier than ever before.
              Working at a startup has given me experience developing back-end
              APIs, writing front-end components, and dockerizing microservices;
              Some of my contributions over the last two years, include
              developing Brightvines blockchain service, writing a csv document
              parser, and integrating resource sharing into our main
              application.
            </p>
          </div>
        </div>
        <div className="work-content">
          <div className="company-container">
            <h3>Montana State</h3>
            <a href="https://www.cs.montana.edu/">
              <img
                src={"/MSU.png"}
                alt={"Montana State University Logo"}
                className="bv-img"
              />
            </a>
          </div>
          <div className="text-container">
            <h3>Graduate Teaching Assistant, Tutor</h3>
            <p>
              While attending Montana State University, I worked as a Graduate
              Teaching Assistant and Tutor for the Computer Science Department.
              I TA'd Computer Systems and Tutored Data Structures and
              Algorithms.
            </p>
          </div>
        </div>
        <div className="work-content">
          <div className="company-container">
            <h3>Bozeman Help Center</h3>
            <a href="https://www.bozemanhelpcenter.org/">
              <img
                src={"/bozeman-help-center.png"}
                alt={"Bozeman Help Center Logo"}
                className="bv-img"
              />
            </a>
          </div>
          <div className="text-container">
            <h3>Data Intern</h3>
            <p>
              I interned for the Bozeman Help Center between my first and second
              years of graduate school. I worked on a project to create data
              visualizations of the Bozeman Help Center's call data. I used
              Python and MySQL on the back-end and Tableau to create the
              visualizations.
            </p>
          </div>
        </div>
      </div>
      <div className="research" id="research">
        <h1>Research</h1>
        <div className="work-content">
          <div className="company-container">
            <h3>Montana State</h3>
            <a href="https://www.cs.montana.edu/">
              <img
                src={"/MSU.png"}
                alt={"Montana State University Logo"}
                className="bv-img"
              />
            </a>
          </div>
          <div className="text-container">
            <a
              className="research-link"
              href="https://scholarworks.montana.edu/xmlui/handle/1/16652"
            >
              <h3>
                Thesis - Effects of Tax Credits on Carbon Capture Sequestration
                in a Temporally Phased Model
              </h3>
            </a>
            <p>
              Studies have consistently shown that the increase of CO
              <sub>2</sub> in the atmosphere is correlated to rising
              temperatures. In order to stop the rise in global temperatures,
              climate change mitigation strategies will need to be deployed at
              scale. In my research, we introduce a novel, multi-phased, Carbon
              Capture and Storage (CCS) infrastructure design model that allows
              for analysis of more complex scenarios that allow for variations
              in project parameters across distinct phases. We also apply this
              new model to a study exploring the impacts of modifying CCS tax
              credits on the economic viability of CCS projects.
            </p>
          </div>
        </div>
      </div>
      <div className="contact" id="contact">
        <div className="contact-container">
          <h1>Contact</h1>
          <div>
            <a href="mailto: cooperstrahan@gmail.com">
              <img src="/gmail.png" alt="gmail" className="contact-img" />
            </a>
            <a href="https://www.linkedin.com/in/cooperstrahan/">
              <img
                src="/linkedin.webp"
                alt="linkedin"
                className="contact-img"
              />
            </a>
            <a href="https://www.github.com/cooperstrahan/">
              <img src="/github.png" alt="github" className="contact-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
