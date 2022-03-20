import React, { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
  const [sectionRefs, setSectionRefs] = useState({});
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Youtube UI",
      url: "#",
      category: "Side",
      imgURL: "/assets/home.jpg",
      description: "HTML+CSS",
      invisible: false,
    },
    {
      id: 2,
      title: "Youtube UI",
      url: "#",
      category: "Side",
      imgURL: "/assets/favicon.png",
      description: "HTML+CSS+JS",
      invisible: false,
    },
    {
      id: 3,
      title: "Youtube UI",
      url: "#",
      category: "Side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
      invisible: false,
    },
    {
      id: 4,
      title: "Youtube UI",
      url: "#",
      category: "Team",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
      invisible: false,
    },
    {
      id: 5,
      title: "Youtube UI",
      url: "#",
      category: "Team",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
      invisible: false,
    },
    {
      id: 6,
      title: "Youtube UI",
      url: "#",
      category: "Side",
      imgURL: "/assets/favicon.png",
      description: "HTML+CSS+JS",
      invisible: false,
    },
    {
      id: 7,
      title: "Youtube UI",
      url: "#",
      category: "Side",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
      invisible: false,
    },
    {
      id: 8,
      title: "Youtube UI",
      url: "#",
      category: "Team",
      imgURL: "/assets/profile.jpg",
      description: "REACT",
      invisible: false,
    },
  ]);

  const handleContactBtn = () => {
    sectionRefs["contact"].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const getRefs = (ref, key) => {
    setSectionRefs((refs) => {
      return { ...refs, [key]: ref };
    });
  };

  return (
    <>
      <Navbar refs={sectionRefs}></Navbar>
      <Home onClick={handleContactBtn} getRef={getRefs}></Home>
      <About getRef={getRefs}></About>
      <Skills getRef={getRefs}></Skills>
      <Projects projects={projects} getRef={getRefs}></Projects>
      <Contact getRef={getRefs}></Contact>
      <UpBtn></UpBtn>
    </>
  );
}

export default App;
