import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Logout } from "grommet-icons";
import SidebarButton from "../../components/SidebarButton";

function LogoutButton() {
  const navigate = useNavigate();
  function logoutOfSpootify() {
    Cookies.remove("accessToken");
    navigate("/login");
  }
  return (
    <SidebarButton
      icon={<Logout />}
      label="Logout"
      onClick={() => logoutOfSpootify()}
    />
  );
}

export default LogoutButton;
