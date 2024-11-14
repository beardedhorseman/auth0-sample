import { useAuth0 } from "@auth0/auth0-react";

const SignInButton = () => {
  const { loginWithPopup, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithPopup()}>Sign In</button>
    )
  );
};

export default SignInButton;
