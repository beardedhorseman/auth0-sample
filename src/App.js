import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import Profile from "./components/Profile";

function App() {
  const { isLoading, error, isAuthenticated } = useAuth0();

  return (
    <main className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Auth0 Authentication</h1>
          <p className="hero-subtitle">
            Secure your app with modern authentication and authorization.
          </p>
          {error && (
            <p className="error-message">
              Authentication Error: {error.message}
            </p>
          )}
          {isLoading && !error && <p className="loading-message">Loading...</p>}
          {!error && !isLoading && (
            <div className="auth-buttons">
              {isAuthenticated ? <SignOutButton /> : <SignInButton />}
            </div>
          )}
        </div>
      </header>
      <section className="profile-section">
        {!error && !isLoading && isAuthenticated && <Profile />}
      </section>
    </main>
  );
}

export default App;
