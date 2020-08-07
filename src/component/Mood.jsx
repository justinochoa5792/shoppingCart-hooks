import React, { useState } from "react";
import "./Mood.css";

function Mood() {
  const [mood, setMood] = useState(true);
  const toggleIsHappy = () => {
    setMood(!mood);
  };
  const styles = { color: mood ? "green" : "red" };
  return (
    <div className="MoodToggler">
      <h3 style={styles} onClick={toggleIsHappy}>
        {mood ? ":)" : ":("}
      </h3>
      <p>Click on face to change mood</p>
    </div>
  );
}
export default Mood;
