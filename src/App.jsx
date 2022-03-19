import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";

function App() {
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
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects projects={projects}></Projects>
      <Contact></Contact>
    </>
  );
}

export default App;
