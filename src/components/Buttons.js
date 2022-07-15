import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Buttons = () => {
  const { setTheme } = useContext(ThemeContext);

  const onClickHandler = () => {
    setTheme("table-dark");
  };
  return (
    <div className="col-md-12  text-center">
      <button
        type="button"
        class="btn button-center
      btn-outline-primary"
      >
        Todos
      </button>
      <button
        onClickHandler={onClickHandler}
        type="button"
        class="btn btn-outline-secondary"
      >
        CHANGE THEME
      </button>
      <button type="button" class="btn btn-outline-secondary">
        Posts
      </button>
    </div>
  );
};

export default Buttons;
