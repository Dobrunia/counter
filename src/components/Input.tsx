import React, { ChangeEvent } from "react";

type PropsType = {
  stateVariable: number;
  setStateVariable: (el: number) => void;
  error: string | null;
};

export const Input: React.FC<PropsType> = (props: PropsType) => {
  const { stateVariable, setStateVariable, error } = props;
  return (
    <input
      className={"input " + (error === null ? "" : "error")}
      type="number"
      onChange={(el: ChangeEvent<HTMLInputElement>) =>
        setStateVariable(Number(el.currentTarget.value))
      }
      value={stateVariable}
    ></input>
  );
};
