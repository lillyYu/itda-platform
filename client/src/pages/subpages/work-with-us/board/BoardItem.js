import { useRef, useState } from "react";

const BoardItem = ({
  title, 
  html,
  from,
  to
}) => {
  const content = useRef(null);

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <div className={`accordionSection ${setActive}`}>
      <button className="accordion" onClick={toggleAccordion}>
        <p className="accordionTitle">
          <strong>{title}</strong>
          <time>{from} ~ {to}</time>
        </p>
      </button>

      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordionContent"
      >
        <div className="accordionText">
          {html}
        </div>
      </div>
    </div>
  )
}

export default BoardItem