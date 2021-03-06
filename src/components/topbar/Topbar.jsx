import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="https://vivekverma-create.github.io/Portfolio/#/" className="logo">
            Vivek.
          </a>
          <div className="itemContainer">
            <a href="tel:+61481152128">
              <Person className="icon" />
              <span>+61 481 152 128</span></a>
          </div>
          <div className="itemContainer">
            <a href="mailto:vivek.verma03@infosys.com">
              <Mail className="icon" />
              <span>vivek.verma03@infosys.com</span></a>
          </div>
        </div>
        {/* <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
