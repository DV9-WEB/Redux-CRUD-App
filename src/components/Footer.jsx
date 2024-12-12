import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "10px 0",
        color: "white",
        backgroundColor: "limegreen",
        display: "flex", // Align content in a column
        justifyContent: "center",
        alignItems: "center", // Center align horizontally
        position: "fixed",
        bottom: 0,
        left: 0,
        gap: "30px",
        fontSize: "1.3rem",
      }}
    >
      <div style={{ marginBottom: "5px" }}>
        Made by <strong>Deepanshu</strong>
      </div>
      <div>
        <a
          href="https://x.com/dv9_WEB/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/dv9-web"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/deepanshu-verma-686aaa2b1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", margin: "0 10px" }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

