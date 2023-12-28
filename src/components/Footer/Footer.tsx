import { STATICS } from "../../statics";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      &#169;{`${new Date().getFullYear()}`} {STATICS.FOOTER_TEXT}
    </footer>
  );
};

export default Footer;
