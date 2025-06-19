import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const telegram = window.Telegram.WebApp;
    const userData = telegram?.initDataUnsafe?.user;

    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) return <p>Загрузка...</p>;

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
      <p>
        <strong>Username:</strong> @{user.username}
      </p>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      {user.phone_number && (
        <p>
          <strong>Phone:</strong> {user.phone_number}
        </p>
      )}
    </div>
  );
};

export default Profile;
