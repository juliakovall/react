import { useContext } from "react";
import { AppContext } from "../context/AppContextData";

function UserProfile() {
  const { user } = useContext(AppContext);

  return <h2>User: {user}</h2>;
}

export default UserProfile;
