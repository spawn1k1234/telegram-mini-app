import React, { useEffect, useState } from "react";

type User = {
  id: number,
  username?: string,
  first_name?: string,
  last_name?: string,
  photo_url?: string,
};

const UserInfo = () => {
  const [user, setUser] = (useState < User) | (null > null);
  const [error, setError] = (useState < string) | (null > null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      setError("Telegram WebApp API не найден");
      return;
    }

    tg.ready();

    const fetchUser = () => {
      const u = tg.initDataUnsafe?.user;
      if (u && typeof u.id === "number") {
        setUser({
          id: u.id,
          username: u.username,
          first_name: u.first_name,
          last_name: u.last_name,
          photo_url: u.photo_url,
        });
      } else {
        setError("Открой через Telegram Mini App");
      }
    };

    fetchUser();
    setTimeout(() => {
      if (!user && !error) fetchUser();
    }, 1000);
  }, [user, error]);

  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  if (!user) return <p style={{ textAlign: "center" }}>Загрузка данных...</p>;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {user.photo_url && (
        <img
          src={user.photo_url}
          alt="avatar"
          style={{ borderRadius: "50%", width: 100, height: 100 }}
        />
      )}
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      {user.username && (
        <p>
          <strong>Username:</strong> @{user.username}
        </p>
      )}
      <p>
        <strong>ID:</strong> {user.id}
      </p>
    </div>
  );
};

export default UserInfo;
