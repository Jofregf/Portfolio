import Layout from "../Components/Layout";
import { skills } from "../public/profile";
import Link from "next/link";

const about = () => {
  return (
    <Layout>
      <div className="container-about">
        <div className="container-text">
          <h3 className="text-about">
            Hi! 👋, My name is Guillermo Jofre. I'm a full stack developer. One
            of my abilities is to work on different projects, as well as learn
            and teach. I like the team work and the communication is important
            for me. My hobbies are listen music, cook ( I'm a professional chef
            )
          </h3>
        </div>
        <div className="container-img">
          <img className="image-about" src="picture.svg" alt="picture" />
        </div>
      </div>
      <h3 className="title-contact">Contact</h3>
      <div className="container-contact">
        <Link href="mailto:jofregf@gmail.com">
          <img className="img-contact" src="mail.png" alt="mail" />
        </Link>
        <Link href="https://www.linkedin.com/in/guillermo-jofre/">
          <a target="_blank">
            <img className="img-contact" src="linkedin.png" alt="linkedin" />
          </a>
        </Link>
      </div>

      <h2 className="skill">Skillset</h2>
      <div className="skill-containers">
        {skills.map((sk, i) => (
          <div key={i} className="icons-skill">
            <img className="skill-img" src={sk.image} alt={sk.name} />
            <p className="skill-name">{sk.name}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default about;
