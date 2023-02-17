import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const Checkbox = ({ checked, setChecked }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "checkbox checkbox-dark" : "checkbox"}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label>Top Rated Only</label>
    </div>
  );
};
