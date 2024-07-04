import { useState } from "react";

const useToggle = (initialVal = false) => {
  const [state, setState] = useState(initialVal);

  function toggle() {
    setState((prev) => !prev);
  }

  return [state, toggle];
};

export default useToggle;
