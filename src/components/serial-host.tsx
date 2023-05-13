'use client'

import React, { useRef, useState } from 'react'
import SerialReadout from './serial-readout'
import { useSerial } from '../useSerial';

export default function SerialHost() {
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

  return (
    <div>
      <button className="m-3" onClick={start}>
        { isStreaming ? "✅ Connected" : "🔌 Click To Connect" }
      </button>
      <SerialReadout sc={val} />
    </div>
  );
}