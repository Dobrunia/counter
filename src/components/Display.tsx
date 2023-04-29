import React from "react";

type PropsType = {
  visibleValue: number | string;
  className: string;
  error: string | null;
};

export const Display: React.FC<PropsType> = (props: PropsType) => {
  const { visibleValue, className, error } = props;
  return <div className={className}>{error ? error : visibleValue}</div>;
};
