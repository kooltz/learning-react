import React, { useContext, useRef } from "react";
import useInputs from "./hooks/useInputs";
import { UserDispatch } from "./App";

function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  // const onCreate = useCallback(() => {

  // }, [username, email, reset]);

  return (
    <div>
      <input
        name="username"
        placeholder="id"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
      />
      <button
        onClick={() => {
          dispatch({
            type: "CREATE_USER",
            user: {
              id: nextId.current,
              username,
              email,
            },
          });
          reset();
          nextId.current += 1;
        }}
      >
        Add
      </button>
    </div>
  );
}

export default React.memo(CreateUser);
