import React, { useReducer } from "react";

const initialState = { isOpen: false, buttonText: "Open Me" };

const isOpenReducer = (state, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "open":
      return { isOpen: true, buttonText: "Close Me" };
    case "close":
      return { isOpen: false, buttonText: "Open Me" };
  }
};

export const TestReducerComponent = () => {
  const [state, dispatch] = useReducer(isOpenReducer, initialState);
  return (
    <>
      <button
        onClick={() =>
          state.isOpen
            ? dispatch({ type: "close" })
            : dispatch({ type: "open" })
        }
      >
        {state.buttonText}
      </button>
    </>
  );
};

// {state.isOpen ? (
//   <button onClick={() => dispatch({ type: "close" })}>
//     {state.buttonText}
//   </button>
// ) : (
//   <button onClick={() => dispatch({ type: "open" })}>
//     {state.buttonText}
//   </button>
// )}
