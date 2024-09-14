import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div
      className="link theme-button pr-3"
      onClick={onClick}
      data-event-category="Anchor link"
      data-event-action="Click"
      data-event-label="Anchor link to go down on the home page"
    >
      {text}
    </div>
  );
};

export default Button;
