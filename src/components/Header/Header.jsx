import React, { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";

import Lottie from "lottie-react";
import moon from "../../assest/animation/moon.json";
import sun from "../../assest/animation/sun.json";
import { FaGoogleDrive } from "react-icons/fa6";
import "./Header.css";

export default function Header() {
  const [showMod, setShowMod] = useState(false);
  const [them, setThem] = useState(localStorage.getItem("them") ?? "dark");
  const [modeThem, setModeThem] = useState(
    localStorage.getItem("modeThem") ?? true
  );

  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [them]);

  const modeThemFun = (them, modeThem) => {
    localStorage.setItem("them", them);
    localStorage.setItem("modeThem", modeThem);
    setThem(them);
    setModeThem(modeThem);
  };

  return (
    <header className="d-flex items-center justify-content-between">
      {/* زر تحميل السيرة الذاتية - يظهر فقط في الشاشات الكبيرة */}

      <div className="div"></div>
      <button
        className="btn-toggle"
        onClick={() => {
          setShowMod(true);
        }}
      >
        <BiMenu size={18} />
      </button>
      <nav>
        <ul>
          {/* <li><a href='#about'>about</a></li> */}
          <li>
            <a href="#projects">
              <a
                href="https://drive.google.com/file/d/12KdFBjXcdSbGKj2QtGQQaR4DCaAecgwp/view?usp=sharing"
                download
              >
                <FaGoogleDrive /> My CV
              </a>
            </a>
          </li>

          <li>
            <a href="#projects">projects</a>
          </li>
          {/* <li><a href='#contact'>contact</a></li> */}
        </ul>
      </nav>

      {showMod && (
        <div className="fixed">
          <ul>
            <li>
              <button
                className="btn-close"
                onClick={() => {
                  setShowMod(false);
                }}
              >
                <IoCloseSharp size={20} />
              </button>
            </li>
            {/* <li><a href='#about'>about</a></li> */}
            <li>
              <a href="#projects">projects</a>
            </li>
            {/* <li><a href='#contact'>contact</a></li> */}
            {/* زر تحميل السيرة الذاتية - يظهر فقط في الشاشات الصغيرة */}
            <li style={{display: " flex" , justifyContent:"center" , alignItems:"center"}}>
              <a
                className="cv-link-mobile"
                href="https://drive.google.com/file/d/12KdFBjXcdSbGKj2QtGQQaR4DCaAecgwp/view?usp=sharing"
                download
              >
                
                <span>My CV</span>
              </a>
            </li>
          </ul>
        </div>
      )}

      <button
        className="btn-mode"
        onClick={() => {
          them === "dark"
            ? modeThemFun("light", false)
            : modeThemFun("dark", true);
        }}
      >
        {modeThem ? (
          <Lottie className="ani-mod" animationData={moon} />
        ) : (
          <Lottie className="ani-mod" animationData={sun} />
        )}
      </button>
    </header>
  );
}
