import React, { useEffect, useRef, useState } from 'react'

export default function SerialReadout(props:any) {
  console.log("| render SerialReadout")
  return <div className="p-3">readout: { props.sc }</div>
}