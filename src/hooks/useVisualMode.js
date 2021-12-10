import { useState } from "react";

export default function useVisualMode (initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);


  function transition (newMode, replace = false) {
    if (replace) {
      setMode(newMode);
    }
    if (!replace) {
      setHistory(prev => ([...prev, mode]));
      setMode(newMode);
    }
  }

  function back () {
    if (history.length >= 1) {
      setMode(history.pop());
      setHistory(prev => ([...prev]));
    }
  }

  return { mode, transition, back };
}
