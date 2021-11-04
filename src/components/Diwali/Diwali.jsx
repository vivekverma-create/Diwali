import "./Diwali.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:10,
      typeSpeed:60,
      strings: ["May this Diwali fill our lives with new hopes for the future and new dreams for tomorrow. With lots of love, wishing you a very Happy Diwali", "Wishing you a life of prosperity, Wishing that you attain victory in all that you start. Happy Diwali","Another year will be over, another year will come. I hope and pray that the lights of Diwali illuminate the new chapter of your life"],
    });
  }, []);

  return (
    <div className="diwali" id="diwali">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/diwalicrop.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <h2>Happy Diwali</h2>
          <h1>---</h1> */}
          <h2>
            <span ref={textRef}></span>
          </h2>
          {/* <h2>Happy Diwali</h2> */}
        </div>
      </div>
    </div>
  );
}