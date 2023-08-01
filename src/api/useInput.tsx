import React, { useState } from "react";

const useInput = () => {
  // state
  const [value, setValue] = useState("");

  // handler
  const handler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  // reset
  const reset = () => setValue("");
  return [value, handler, reset] as const;
};

export default useInput;
