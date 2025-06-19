// src/components/Home.js
import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Главная страница</h1>
      <button style={styles.button}>Нажми меня</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;
