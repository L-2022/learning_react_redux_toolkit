import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decremented,
  incremented,
  resetCount,
  saveCount,
  clearListCount,
} from "../../store/slices/counterSlices";

function Counter() {
  const countRedax = useSelector((state) => state.counter.counter);

  const listCount = useSelector((state) => state.counter.listCount);

  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  return (
    <>
      <>
        <p>Значение счетчика: {count}.</p>
        <button
          onClick={() => {
            setCount((prevVal) => prevVal + 1);
          }}
        >
          Увеличить (+)
        </button>
        <button onClick={() => setCount((prevVal) => prevVal - 1)}>
          Уменьшить (-)
        </button>
        <button onClick={() => setCount(0)}>Сбросить</button>
      </>
      <h4>------------redux-------------</h4>
      <p>Значение счетчика redax: {countRedax}.</p>

      <button
        onClick={() => {
          dispatch(incremented());
        }}
      >
        Увеличить (+)
      </button>
      <button
        onClick={() => {
          dispatch(decremented());
        }}
      >
        Уменьшить (-)
      </button>
      <button
        onClick={() => {
          dispatch(resetCount());
        }}
      >
        Сбросить
      </button>
      <button
        onClick={() => {
          dispatch(saveCount({ countRedax }));
        }}
      >
        Save
      </button>
      {listCount.length ? (
        <button
          onClick={() => {
            dispatch(clearListCount());
          }}
        >
          Clear list
        </button>
      ) : (
        <></>
      )}
      <div>
        {listCount.map((el, index) => (
          <div>
            {index} : {el}
          </div>
        ))}
      </div>
    </>
  );
}
export default Counter;
