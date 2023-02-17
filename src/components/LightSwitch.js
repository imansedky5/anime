import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const LightSwitch = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };
  return (
    <img
      className="light-switch"
      src={darkMode ? "/images/dark.png" : "/images/light.png"}
      onClick={handleClick}
    ></img>
  );
};
