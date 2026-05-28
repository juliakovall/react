import { useContext } from "react";
import { AppContext } from "../context/AppContextData";

function UserButton() {
  const { changeUser } = useContext(AppContext);

  return <button onClick={changeUser}>Change User</button>;
}

export default UserButton;
