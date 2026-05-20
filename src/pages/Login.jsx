import {
  Authenticator
} from "@aws-amplify/ui-react";

export default function Login() {

  return (
    <Authenticator>
      {({ signOut, user }) => (

        <div>
          <button onClick={signOut}>
            Logout
          </button>
        </div>

      )}
    </Authenticator>
  );
}