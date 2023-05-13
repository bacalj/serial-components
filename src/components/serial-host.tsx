'use client'

import React, { useRef, useState } from 'react'
import SerialReadout from './serial-readout'
import { useSerial } from '../useSerial';

export default function SerialHost() {

  const { isStreaming, start, val } = useSerial();

  return (
    <div>
      <button className="m-3" onClick={start}>
        { isStreaming ? "✅ Connected" : "🔌 Click To Connect" }
      </button>
      <SerialReadout sc={val} />
    </div>
  );
}