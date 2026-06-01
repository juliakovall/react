import { useSelector } from "react-redux";
import type { RootState } from "../store";

function UserProfile() {
  const userName = useSelector((state: RootState) => state.user.name);

  return <h2>User: {userName}</h2>;
}

export default UserProfile;
