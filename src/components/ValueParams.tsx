import React from "react";
import { Input } from "./Input";

type PropsType = {
  firstInput: number;
  secondInput: number;
  setFirstInput: (el: number) => void;
  setSecondInput: (el: number) => void;
  setError: (el: string | null) => void;
};

export const ValueParams: React.FC<PropsType> = (props: PropsType) => {
  const {
    firstInput,
    secondInput,
    setFirstInput,
    setSecondInput,
    setError,
  } = props;

  function gigaError() {
    if (firstInput === secondInput || firstInput < secondInput) {
      setError("Incorrect value!");
      return "Incorrect value!";
    } else {
      setError(null);
      return null;
    }
  }

  function megaGigaError() {
    if (firstInput === secondInput || secondInput < 0 || firstInput < secondInput) {
      setError("Incorrect value!");
      return "Incorrect value!";
    } else {
      setError(null);
      return null;
    }
  }

  return (
    <div className="ValueParams border">
      <div>
        <strong>max value: </strong>
        <Input
          stateVariable={firstInput}
          setStateVariable={setFirstInput}
          error={gigaError()}
        />
      </div>
      <div>
        <strong>start value: </strong>
        <Input
          stateVariable={secondInput}
          setStateVariable={setSecondInput}
          error={megaGigaError()}
        />
      </div>
    </div>
  );
};
