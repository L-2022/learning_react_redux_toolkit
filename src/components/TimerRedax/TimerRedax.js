import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveTimerRedax,
  deleteTimerRedax,
} from "../../store/slices/timerSlices";
import ListTimer from "../listTimers";
import { v4 as uuidv4 } from "uuid";

function TimerRedax() {
  const dispatch = useDispatch();
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
  const listTimersRedux = useSelector((state) => state.timers.listTimers);

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

  const resetTimer = () => {
    setStart(false);
    setCarrentSecond(0);
    setCarrentMinutes(0);
    setCarrentHours(0);
    seTtime("00:00:00");
  };

  const deleteTimer = (index) => {
    dispatch(deleteTimerRedax({ index }));
  };

  return (
    <div>
      <h4>Redax</h4>
      <h1>{time}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
      <button onClick={nextTimer}>next Timer</button>
      <button onClick={resetTimer}>Reset Timer</button>
      <button
        onClick={() => {
          dispatch(saveTimerRedax({ time }));
        }}
      >
        Save Timer
      </button>
      <ListTimer list={listTimersRedux} deleteTimer={deleteTimer}></ListTimer>
    </div>
  );
}

export default TimerRedax;
