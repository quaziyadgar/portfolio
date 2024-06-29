import React from "react";

export const Header = () => {
  return (
    <>
      <header className="dark-menu header">
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">YadgarDev</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className="navicon navicon-dark" />
        </label>
        <ul className="dark-menu menu">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              <label className="switch">
                <input type="checkbox" defaultChecked="" />
                <span className="slider round">
                  <span className="emoji">
                    <img
                      alt="🌜"
                      draggable="false"
                      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f31c.png"
                      style={{
                        height: "1em",
                        width: "1em",
                        margin: "0px 0.05em 0px 0.1em",
                        verticalAlign: "-0.1em",
                      }}
                    />
                  </span>
                </span>
              </label>
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};
