import Link from "next/link";

function index() {
  return (
    <div>
      <div className="tariffCards">
        <div className="economy">
          <Link href="/about">
            <a className="anclaje-card">About Me</a>
          </Link>
        </div>
        <div className="first">
          <Link href="/projects">
            <a className="anclaje-card">Project</a>
          </Link>
        </div>
        <div className="premiumeconomy">
          <Link href="/resume">
            <a className="anclaje-card">Resume</a>
          </Link>
        </div>
        <div className="business">
          <Link href="/github">
            <a className="anclaje-card">GitHub</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default index;
