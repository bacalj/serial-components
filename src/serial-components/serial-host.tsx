'use client'

import React, { useEffect, useRef, useState } from 'react'
import SerialReadout from './serial-readout'

export default function SerialHost() {
  const [sc, setSc] = useState<any>(1)

  useEffect(() => {
    const interval = setInterval(() => { setSc(sc + 1) }, 100)
    return () => clearInterval(interval)
  }, [sc])

  return (
    <div>
      <h2>Serial Host</h2>
      <SerialReadout sc={sc} />
    </div>
  )
}