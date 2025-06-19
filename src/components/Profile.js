// src/components/Profile.js
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Запрос к серверной функции для получения данных пользователя
    fetch("/api/telegram")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) return <p>Загрузка...</p>;

  return (
    <div style={styles.container}>
      <h1>Профиль</h1>
      <div style={styles.profile}>
        <img
          src={user.photo_url || "https://via.placeholder.com/150"}
          alt="Avatar"
          style={styles.avatar}
        />
        <p>Никнейм: {user.username}</p>
        <p>Номер телефона: {user.phone}</p>
        <p>
          Имя: {user.first_name} {user.last_name}
        </p>
        <p>Телеграм ID: {user.id}</p>
      </div>
      <button style={styles.button}>Нажми меня</button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  profile: {
    margin: "20px 0",
  },
  avatar: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Profile;
