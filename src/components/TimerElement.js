function Timer ({timer, index, deleteTimer}) {
    
    return (
        <div>   
            <h2>{timer.timerSave}  </h2>            
            <button onClick={() => deleteTimer(index)} > Delete</button>
        </div>
    )
}
export default Timer