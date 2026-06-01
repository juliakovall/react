import { useDispatch } from "react-redux";
import { changeUser, resetUser } from "../store/userSlice";
import type { AppDispatch } from "../store";

function UserButton() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <button onClick={() => dispatch(changeUser())}>Change User</button>
      <button onClick={() => dispatch(resetUser())}>Reset User</button>
    </div>
  );
}

export default UserButton;
