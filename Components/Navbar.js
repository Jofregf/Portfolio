import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="container-nav">
        <div className="container-option">
          <Link href="/">
            <a className="navbar-text">Home</a>
          </Link>
        </div>
        <div className="container-option">
          <Link href="/about">
            <a className="navbar-text">About Me</a>
          </Link>
        </div>
        <div className="container-option">
          <Link href="/projects">
            <a className="navbar-text">Projects</a>
          </Link>
        </div>
        <div className="container-option">
          <Link href="/resume">
            <a className="navbar-text">Resume</a>
          </Link>
        </div>
        <div className="container-option">
          <Link href="/github">
            <a className="navbar-text">Github</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
