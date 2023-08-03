// import { useState, useEffect } from "react";
import "../App";
import TimerElement from './TimerElement';

function listTimer({ list, deleteTimer }) {
  return (
    <div className="listTimer">
      {list.map((element, index) => (
        <TimerElement  onDoubleClick={()=> deleteTimer(index)}
          timer={element}
          index={index}
          deleteTimer={deleteTimer}
          key={index}
         
        ></TimerElement>
      ))}
    </div>
  );
}

export default listTimer;
