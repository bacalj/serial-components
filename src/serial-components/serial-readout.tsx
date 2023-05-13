import React, { useEffect, useRef, useState } from 'react'

export default function SerialReadout(props:any) {
  return (
    <div className="bg-indigo-700">
      readout: { props.sc }
    </div>
  )
}