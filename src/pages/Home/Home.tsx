import { useNavigate } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import Button from "../../components/Button/Button";
import Showcase from "../../components/Showcase/Showcase";

import { STATICS } from "../../statics";
import { skillItemsData } from "../../data/data";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const portfolioHandler = () => {
    navigate("/works");
  };

  return (
    <main className="HomeWpr">
      <Showcase />
      <div className="containerMini">
        <p className="introSalutation">{STATICS.INTRO}</p>
        <div className="intro">
          <div>
            <h1>{STATICS.NAME}</h1>
            <p>{STATICS.BIO}</p>
          </div>
          <img
            width={120}
            height={120}
            alt="avataar"
            src={STATICS.GITHUB_AVATAAR_URL}
          />
        </div>
        <div className="info">
          <h2>About</h2>
          <p className="desc">
            {STATICS.BIO_DESC}
            <br />
            <br />
            {STATICS.PRESENT_SITUATION}
          </p>
        </div>
        <Button
          isCenter={true}
          text="My Projects"
          btnClicker={portfolioHandler}
          styles={{ marginTop: 20, marginBottom: 20 }}
          rightIcon={<BiChevronRight style={{ marginLeft: 4 }} />}
        />
        <div className="info">
          <h2>Bio</h2>
          <p className="bullet">
            <strong className="year">2016</strong>
            <span>Completed X<sup>th</sup> Standard, 10CGPA</span>
          </p>
          <p className="bullet">
            <strong className="year">2018</strong>
            <span>Completed XII<sup>th</sup> Standard, PCM, 91.6%</span>
          </p>
          <p className="bullet">
            <strong className="year">2022</strong>
            <span>
              Completed B.Tech in Computer Science from{" "}
              <a href={STATICS.THAPAR_URL}>Thapar University (TIET), Patiala</a>
            </span>
          </p>
          <p className="bullet">
            <strong className="year">2022 to Present</strong>
            <span>Working as a Professional in India</span>
          </p>
        </div>
        <div className="info">
          <h2>Skills/Tools</h2>
          <ul>
            {skillItemsData.map((skill) => (
              <li key={skill.id}>{skill.label}</li>
            ))}
          </ul>
        </div>
        <div className="info">
          <h2>I ♥</h2>
          <p className="desc">{STATICS.HOBBIES_DESC}</p>
        </div>
        <div className="info">
          <h2>Presence</h2>
          <nav>
            <a
              className="iconLink"
              href={STATICS.LINKED_URL}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={18} />
              <span>{STATICS.LINKEDIN_HANDLE}</span>
            </a>
            <a
              className="iconLink"
              href={STATICS.GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={18} />
              <span>{STATICS.GITHUB_HANDLE}</span>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Home;
