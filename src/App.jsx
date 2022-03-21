import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import UpBtn from "./components/upbtn/upbtn";

function App({ projects }) {
  const [sectionRefs, setSectionRefs] = useState({});
  const [visibleNav, setVisibleNav] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [btns, setBtns] = useState([
    {
      name: "home",
      active: true,
    },
    {
      name: "about",
      active: false,
    },
    {
      name: "skills",
      active: false,
    },
    {
      name: "projects",
      active: false,
    },
    {
      name: "contact",
      active: false,
    },
  ]);
  const handleActive = useCallback((section) => {
    setBtns((btns) => {
      return btns.map((btn) => {
        if (btn.name === section) {
          return { ...btn, active: true };
        } else {
          return { ...btn, active: false };
        }
      });
    });
  }, []);
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
  }, [sectionRefs]);

  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      if (sectionRefs.home === undefined) {
        return;
      }
      const rect = sectionRefs["home"].current.getBoundingClientRect();
      if (e.pageY > rect.height + 20) {
        setVisibleBtn(true);
      } else {
        setVisibleBtn(false);
      }
    });
  }, [sectionRefs]);

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRatio > 0) {
          const index = Object.values(sectionRefs)
            .map((item) => item.current)
            .indexOf(entry.target);
          if (entry.boundingClientRect.y < 0) {
            const section = Object.values(sectionRefs).map(
              (item) => item.current.dataset.section
            )[index + 1];
            handleActive(section);
          } else {
            const section = Object.values(sectionRefs).map(
              (item) => item.current.dataset.section
            )[index - 1];
            handleActive(section);
          }
        }
      });
    }, options);
    Object.values(sectionRefs).forEach((ref) => {
      observer.observe(ref.current);
    });
  }, [sectionRefs, handleActive]);

  useEffect(() => {
    window.addEventListener("wheel", () => {
      if (window.screenY === 0) {
        handleActive("home");
      } else if (
        window.innerHeight + window.scrollY ===
        document.body.clientHeight
      ) {
        handleActive("contact");
      }
    });
  }, [handleActive]);

  const handleContactBtn = useCallback(() => {
    sectionRefs["contact"].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [sectionRefs]);

  const getRefs = useCallback((ref, key) => {
    setSectionRefs((refs) => {
      return { ...refs, [key]: ref };
    });
  }, []);

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
        btns={btns}
        onActive={handleActive}
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
