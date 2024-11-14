import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="profile-header">
          {user?.picture && (
            <img
              className="profile-picture"
              src={user.picture}
              alt={user?.name}
            />
          )}
          <h2 className="profile-name">{user?.name}</h2>
        </div>
        <div className="profile-details">
          <h3>User Details</h3>
          <ul className="details-list">
            {Object.entries(user).map(([key, value], index) => (
              <li key={index} className="detail-item">
                <strong>{key}:</strong> {value?.toString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default Profile;
