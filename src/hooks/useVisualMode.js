import { useState } from "react";

export default function useVisualMode (initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([]);


  function transition (newMode, replace = false) {
    if (replace) {
      setMode(newMode);
    }
    if (!replace) {
      history.push(mode);
      setHistory(history);
      setMode(newMode);
    }
  }

  function back () {
    if (history.length >= 1) {
      setMode(history.pop());
      setHistory(history);
    }
  }

  return { mode, transition, back };
}
