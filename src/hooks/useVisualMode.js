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
      let prevHistory = history;
      setMode(prevHistory.pop());
      setHistory(prevHistory);
    }
  }

  return { mode, transition, back };
}
