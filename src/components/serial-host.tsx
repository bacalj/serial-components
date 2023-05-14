'use client'

import React, { useRef, useState } from 'react'
import SerialReadout from './serial-readout'
import { useSerial } from '../useSerial';

export default function SerialHost() {
  console.log("| render SerialHost")
  const { isStreaming, val, openStream, isConnected } = useSerial();

  return (
    <div>
      <button className="m-3" onClick={openStream}>
        { isStreaming && isConnected ? "✅ Connected" : "🔌 Click To Connect" }
      </button>
      <SerialReadout sc={val} />
    </div>
  );
}