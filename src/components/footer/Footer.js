import React from "react";
import "./footer.css";
import { CopyRightIcon, EnthusiasmIcon, PartyIcon } from "../../images/footer";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
        <div>Copyright</div>
        <img src={CopyRightIcon} alt="copyright" className="copyright-icon" />
        <div>2024 | by Yuktha Polepalli</div>
      </div>
      <div className="right">
        <div>Made with enthusiasm,</div>
        <img src={EnthusiasmIcon} alt="enthusiasm" />
        <div>a few sleepless nights,</div>
        <div> and an endless supply of JavaScript.</div>
        <img src={PartyIcon} alt="joy" />
      </div>
    </div>
  );
};

export default Footer;
