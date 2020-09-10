import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        Remove
      </button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
