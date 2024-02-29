import React, { useEffect, useRef, useState } from "react";

export function UseRefDemo3(props) {
  let [counter, setCounter] = useState(0);
  let prevValue = useRef(0);
  console.log(prevValue);

  useEffect(() => {
    prevValue.current = counter;
  },[counter]);

  return (
    <>
      <p>
        counter is {counter} & prev Value is - {prevValue.current}
      </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        add
      </button>
    </>
  );
}
