import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Counter } from "./components/Counter";

/**
 * список ссылок в шапке
 */
const navLinkObj = {
  First_Counter: "/first",
  Second_Counter: "/second",
};

function App() {
  /**
   * state для input'ов максимальное значение
   */
  const [firstInput, setFirstInput] = useState<number>(
    Number(localStorage.getItem("maxValue"))
  );
  /**
   * state для input'ов минимальное значение
   */
  const [secondInput, setSecondInput] = useState<number>(
    Number(localStorage.getItem("minValue"))
  );
  /**
   * максимальное значение счетчика
   */
  const [maxValue, setMaxValue] = useState<number>(firstInput);
  /**
   * минимальное значение счетчика
   */
  const [minValue, setMinValue] = useState<number>(secondInput);
  /**
   * текущее значение счетчика
   */
  const [currentValue, setCurrentValue] = useState<number>(minValue);
  /**
   * фун-я инкремента текущего значения
   */
  function increment() {
    if (
      firstInput === secondInput ||
      firstInput < secondInput ||
      secondInput < 0
    ) {
      return;
    } else {
      currentValue < maxValue && setCurrentValue(currentValue + 1);
    }
  }
  /**
   * ошибки
   */
  const [error, setError] = useState<string | null>(null);
  /**
   * фун-я установки текущего значения на минимальное
   */
  function reset() {
    if (
      firstInput === secondInput ||
      firstInput < secondInput ||
      secondInput < 0
    ) {
      return;
    } else {
      setCurrentValue(minValue);
    }
  }
  /**
   * фун-я установки нового минимального и макс значения
   */
  function setLocalStorage() {
    if (
      firstInput === secondInput ||
      firstInput < secondInput ||
      secondInput < 0
    ) {
      return;
    } else {
      localStorage.setItem("maxValue", JSON.stringify(firstInput));
      setMaxValue(firstInput);
      localStorage.setItem("minValue", JSON.stringify(secondInput));
      setMinValue(secondInput);
      setCurrentValue(secondInput);
    }
  }
  /**
   * тип счетчика
   */
  const counterType = {
    first: "first",
    second: "second",
  };

  return (
    <>
      <Header navLinkObj={navLinkObj} />
      <Routes>
        <Route
          path={navLinkObj.First_Counter}
          element={
            <Counter
              type={counterType.first}
              currentValue={currentValue}
              maxValue={maxValue}
              minValue={minValue}
              firstInput={firstInput}
              secondInput={secondInput}
              setFirstInput={setFirstInput}
              setSecondInput={setSecondInput}
              increment={increment}
              reset={reset}
              setLocalStorage={setLocalStorage}
              error={error}
              setError={setError}
            />
          }
        ></Route>
        <Route
          path={navLinkObj.Second_Counter}
          element={
            <Counter
              type={counterType.second}
              currentValue={currentValue}
              maxValue={maxValue}
              minValue={minValue}
              firstInput={firstInput}
              secondInput={secondInput}
              setFirstInput={setFirstInput}
              setSecondInput={setSecondInput}
              increment={increment}
              reset={reset}
              setLocalStorage={setLocalStorage}
              error={error}
              setError={setError}
            />
          }
        ></Route>
        <Route path="*">Error 404</Route>
      </Routes>
    </>
  );
}

export default App;
