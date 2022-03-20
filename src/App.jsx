import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import UpBtn from "./components/upbtn/upbtn";

function App() {
  const [sectionRefs, setSectionRefs] = useState({});
  const [visibleNav, setVisibleNav] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [activeBtn, setActiveBtn] = useState("home");

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (sectionRefs.home === undefined) {
        return;
      }
      const rect = sectionRefs["home"].current.getBoundingClientRect();
      if (e.pageY / rect.height >= 0.2) {
        setVisibleNav(true);
      } else {
        setVisibleNav(false);
      }
    });
  }, [sectionRefs.home]);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (sectionRefs.home === undefined) {
        return;
      }
      const rect = sectionRefs["home"].current.getBoundingClientRect();
      if (e.pageY > rect.height) {
        setVisibleBtn(true);
      } else {
        setVisibleBtn(false);
      }
    });
  }, [sectionRefs.home]);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (!entry.isIntersecting) {
          console.log(entry.target.dataset.section);
        }
      });
    }, options);

    Object.values(sectionRefs).forEach((ref) => {
      observer.observe(ref.current);
    });
  }, [sectionRefs]);

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

  const handleObserver = (entries) => {
    console.log(entries);
  };

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

  const handleUpbtn = () => {
    sectionRefs["home"].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Navbar
        refs={sectionRefs}
        visible={visibleNav}
        activeBtn={activeBtn}
      ></Navbar>
      <Home onClick={handleContactBtn} getRef={getRefs}></Home>
      <About getRef={getRefs}></About>
      <Skills getRef={getRefs}></Skills>
      <Projects projects={projects} getRef={getRefs}></Projects>
      <Contact getRef={getRefs}></Contact>
      <UpBtn onClick={handleUpbtn} visible={visibleBtn}></UpBtn>
    </>
  );
}

export default App;
