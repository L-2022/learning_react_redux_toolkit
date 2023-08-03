import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Counter from "./components/Counter/Counter";
import ListTimer from "./components/listTimers";

const App = () => {
  const [carrentSecond, setCarrentSecond] = useState(0);
  const [carrentMinutes, setCarrentMinutes] = useState(0);
  const [carrentHours, setCarrentHours] = useState(0);
  const [start, setStart] = useState(false);
  const [time, seTtime] = useState("00:00:00");
  const [listTimers, setListTimers] = useState([]);

  const calcSeconds = (Second) => {
    if (Second > 59) {
      setCarrentSecond(0);
    }
    if (carrentMinutes > 59) {
      setCarrentMinutes(0);
    }
    if (carrentHours > 59) {
      setCarrentHours(0);
    }
  };

  const addZero = (value, quontiti = 10) => {
    return value < quontiti ? "0" + value : value;
  };

  const resetTimer = () => {
    setStart(false);
    setCarrentSecond(0);
    setCarrentMinutes(0);
    setCarrentHours(0);
    seTtime("00:00:00");
  };

  useEffect(() => {
    if (start) {
      setTimeout(() => setCarrentSecond(carrentSecond + 1), 1000); // ms
      setTimeout(() => setCarrentMinutes(carrentMinutes + 1), 60000);
      setTimeout(() => setCarrentHours(carrentHours + 1), 6000000);
      setTimeout(() => calcSeconds(carrentSecond), 1000); // ms
      seTtime(
        addZero(carrentHours) +
          ":" +
          addZero(carrentMinutes) +
          ":" +
          addZero(carrentSecond)
      );
    }
  });

  const startTimer = () => {
    setCarrentSecond(0);
    setCarrentMinutes(0);
    setCarrentHours(0);
    setStart(true);
  };
  const stopTimer = () => {
    setStart(false);
  };
  const nextTimer = () => {
    setStart(true);
  };

  const saveTimer = () => {
    const obj = {
      idTimer: uuidv4(),
      timerSave: time,
    };
    setListTimers([...listTimers, obj]);
  };

  const deleteTimer = (index) => {
    console.log(listTimers, "--------");
    setListTimers(listTimers.filter((_, idx) => idx !== index));
    // setListTimers([listTimers.shift(el)]);
  };

  // function palindrome(str) {
  //   str = str
  //     .toString()
  //     .toLowerCase()
  //     .replace(/\s|[,.!?"/-]/g, "");
  //   return str === str.split("").reverse().join("");
  // }

  // function superPalindrome(str) {
  //   const halfOfLength = Math.floor(str.length / 2);
  //   str = str.toLowerCase().replace(/\s|[,.!?"/-`':;]/g, "");
  //   for (let i = 0; i < halfOfLength; i++)
  //     if (str[i] !== str[str.length - i - 1]) {
  //       return false;
  //     }
  //   return true;
  // }

  // console.log(palindrome("шалаш"));
  // console.log(palindrome("Вася"));
  // console.log(palindrome("А муза рада музе без ума да разума"));
  // console.log(
  //   palindrome('"Пустите!" - Летит супу миска Максиму. - "Пустите, летит суп!"')
  // );
  // console.log(palindrome(123321));

  // Тут много палиндромов
  // http://www.perevod71.ru/palindromy-predlozhenija

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={nextTimer}>next Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <button onClick={saveTimer}>Save Timer</button>

      <ListTimer list={listTimers} deleteTimer={deleteTimer}></ListTimer>

      <Counter></Counter>
    </div>
  );
};

export default App;
