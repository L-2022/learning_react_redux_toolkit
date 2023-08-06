import "./App.css";
import Counter from "./components/Counter/Counter";
import TimerRedax from './components/TimerRedax/TimerRedax'
import TimerUseState from './components/TimerUseState/TimerUseState'
const App = () => {
  return (
    <div>
      <TimerRedax></TimerRedax>
      <TimerUseState></TimerUseState>
      <Counter></Counter>
    </div>
  );
};

export default App;
