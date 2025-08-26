import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div
  className="footer-div"
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    color: "#ccc",
  }}
>
  <p>© 2025 Mohamed Aziz Skhiri. All Rights Reserved.</p>
</div>

    </Fade>
  );
}
