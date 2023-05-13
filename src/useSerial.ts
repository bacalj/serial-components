import { useState, useRef } from 'react'

export function useSerial() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [val, setVal] = useState(0);
  const interval = useRef<any>(null);

  const start = () => {
    if (isStreaming) return;
    setIsStreaming(true);
    interval.current = setInterval(() => {
      setVal((timeElapsed) => timeElapsed + 1);
    }, 1000);
  };

  return { isStreaming, val, start };

}