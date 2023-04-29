import React from "react";

type PropsType = {
  name: string;
  onClick: () => void;
  disabled: boolean;
};

export const Button: React.FC<PropsType> = (props: PropsType) => {
  const { name, onClick, disabled } = props;
  return (
    <button className={"btn_zalupa " + (disabled ? "disabled" : "")} onClick={onClick} disabled={disabled}>
      {name}
    </button>
  );
};
