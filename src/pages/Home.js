import React, { useState, useEffect, useContext } from "react";
import AnimeList from "../components/AnimeList";
import { LightSwitch } from "../components/LightSwitch";
import { DarkModeContext } from "../context/DarkModeContext";
import { Form } from "../components/Form";

const Home = () => {
  const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const [submittedVal, setSubmittedVal] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <header>
        <h1>Anime App</h1>

        <LightSwitch></LightSwitch>
      </header>
      <div className="home-container">
        <Form
          setInputVal={setInputVal}
          setChecked={setChecked}
          isChecked={checked}
          inputVal={inputVal}
          setSubmittedVal={setSubmittedVal}
        ></Form>
        <AnimeList searchVal={submittedVal} isChecked={checked}></AnimeList>
      </div>
    </>
  );
};

export default Home;
