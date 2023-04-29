import React, { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";
import { ValueParams } from "./ValueParams";

type PropsType = {
  type: string;
  currentValue: number;
  maxValue: number;
  minValue: number;
  firstInput: number;
  secondInput: number;
  setFirstInput: (el: number) => void;
  setSecondInput: (el: number) => void;
  increment: () => void;
  reset: () => void;
  setLocalStorage: () => void;
  error: string | null;
  setError: (el: string | null) => void;
};

export const Counter: React.FC<PropsType> = (props: PropsType) => {
  const {
    type,
    currentValue,
    maxValue,
    minValue,
    firstInput,
    secondInput,
    setFirstInput,
    setSecondInput,
    increment,
    reset,
    setLocalStorage,
    error,
    setError,
  } = props;

  const [classN, setClassN] = useState<boolean>(true);
  function secondInputSet() {
    setLocalStorage();
    setClassN(!classN);
  }

  return (
    <div className="wrapper">
      <div
        className={
          type === "first"
            ? "border conteiner"
            : classN
            ? "border conteiner positionX z_index"
            : "border conteiner"
        }
      >
        <ValueParams
          firstInput={firstInput}
          secondInput={secondInput}
          setFirstInput={setFirstInput}
          setSecondInput={setSecondInput}
          setError={setError}
        />
        <div className="border btns btns--center">
          <Button
            name={"set"}
            onClick={type === "first" ? setLocalStorage : secondInputSet}
            disabled={
              error
                ? true
                : type === "first"
                ? maxValue === firstInput && minValue === secondInput
                : false
            }
          />
        </div>
      </div>
      <div
        className={
          type === "first"
            ? "border conteiner"
            : classN
            ? "border conteiner"
            : "border conteiner positionX z_index"
        }
      >
        <Display
          visibleValue={
            maxValue === firstInput && minValue === secondInput
              ? currentValue
              : 'enter value and press "set"'
          }
          className={
            "display border " + (currentValue >= maxValue ? "red" : "")
          }
          error={error}
        />
        <div className="border btns btns--between">
          <Button
            name={"increment"}
            onClick={increment}
            disabled={
              currentValue >= maxValue ||
              !(maxValue === firstInput && minValue === secondInput)
            }
          />
          <Button
            name={"reset"}
            onClick={reset}
            disabled={
              currentValue === minValue ||
              !(maxValue === firstInput && minValue === secondInput)
            }
          />
          {type === "second" ? (
            <Button
              name={"set"}
              onClick={() => {
                setClassN(!classN);
              }}
              disabled={false}
            ></Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
