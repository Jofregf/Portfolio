import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-text">
        <h1 className="footer-title">&copy; Guillermo Jofre Portfolio</h1>
        <p className="footer-date">{new Date().getFullYear()}</p>
        <p className="footer-date">All Rights Reserved.</p>
      </div>
      <div className="footer-text">
        <div>
          <Link href="mailto:jofregf@gmail.com">
            <img className="img-footer" src="mail.png" alt="mail" />
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/guillermo-jofre/">
            <a target="_blank">
              <img className="img-footer" src="linkedin.png" alt="linkedin" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
