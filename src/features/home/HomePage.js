import useCookieAuth from "../../hooks/useCookieAuth";

function HomePage() {
  useCookieAuth();
  return <div>This is the home page</div>;
}

export default HomePage;
