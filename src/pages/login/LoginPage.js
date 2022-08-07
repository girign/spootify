import {
  CLIENT_ID,
  REDIRECT_URI,
  AUTH_ENDPOINT,
  RESPONSE_TYPE,
} from "../../app/constants";

function LoginPage() {
  return (
    <div>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}`}
      >
        Login using Spotify
      </a>
    </div>
  );
}

export default LoginPage;
