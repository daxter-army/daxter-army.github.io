import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import { STATICS } from "../../statics";

import "./Header.css";

const Header = () => {
  return (
    <header className="HeaderWpr">
      <div className="container">
        <div className="leftInfo">
          <div className="nameLogoWpr">
            <NavLink to={"/"} className="titleWpr">
              <img
                width={28}
                height={28}
                alt="m letter logo"
                src={STATICS.ICON_URL}
              />
              <p className="title">{STATICS.AUTHOR_NAME}</p>
            </NavLink>
          </div>
          <nav>
            <Link to={"/works"}>{STATICS.WORKS}</Link>
            {/* <Link to={'/posts'}>Articles</Link> */}
            <a
              href={STATICS.GITHUB_REPO_URL}
              className="iconLink"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={18} />
              <span>Source</span>
            </a>
          </nav>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
