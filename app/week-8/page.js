"use client"

import { useUserAuth } from "./_utils/auth-context";

const LandingPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  
  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={firebaseSignOut}>Logout</button>
          <a href="/week-8/shopping-list">Go to Shopping List</a>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default LandingPage;
