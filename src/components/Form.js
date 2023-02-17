import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { Checkbox } from "./Checkbox";

export const Form = ({
  setInputVal,
  setChecked,
  isChecked,
  inputVal,
  setSubmittedVal,
}) => {
  const { darkMode } = useContext(DarkModeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedVal(inputVal);
    setInputVal("");
  };

  return (
    <form
      className={
        darkMode ? "filter-container filter-container-dark" : "filter-container"
      }
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder="Filter by anime title .."
        id="movieTitle"
        onChange={({ target: { value } }) => setInputVal(value)}
      />
      <Checkbox checked={isChecked} setChecked={setChecked}></Checkbox>
      <button type="submit"> Search</button>
    </form>
  );
};
