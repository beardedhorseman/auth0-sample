import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <main className="column">
      <h1> Auth0 Authentication</h1>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <SignInButton />
          <SignOutButton />
          <Profile />
        </>
      )}
    </main>
  );
}

export default App;
