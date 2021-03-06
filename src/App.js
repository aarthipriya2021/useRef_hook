import './App.css';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';

function App() {
  return (
    <div className="App">
      <FocusInput />
        <HookTimer />
    </div>
  );
}

export default App;

// Uses:
//Managing focus, text selection, or media playback
//Triggering imperative animations
//Integrating with third-party DOM libraries
