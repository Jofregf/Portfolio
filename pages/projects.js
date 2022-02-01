import Layout from "../Components/Layout";
import Link from "next/link";
import { project } from "../public/profile";

function projects() {
  return (
    <Layout>
      <div className="container-title">
        <h3 className="title-principal">My Projects</h3>
      </div>
      <div className="container-projects">
        {project.map((pro, i) => (
          <div key={i} className="project">
            <h3 className="title-project">{pro.title}</h3>
            <img className="img-project" src={pro.image} alt={pro.name}></img>
            <p className="text-description">{pro.description}</p>
            <Link href={pro.url}>
              <button className="btn-view">View Project</button>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default projects;
