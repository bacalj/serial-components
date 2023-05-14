'use client'

import { useState, useRef } from 'react'

const S = window.navigator.serial;
const TE = new TextEncoderStream();
const TD = new TextDecoderStream();

console.log("| S", S)

// https://makecode.microbit.org/_ig777L3CYFRV

export function useSerial() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [val, setVal] = useState(0);
  const deviceInfo = useRef<any>(null);
  const localBuffer = useRef<any>('');
  const writer = useRef<any>(null);
  const reader = useRef<any>(null);
  const port = useRef<any>(null);

  S.addEventListener('connect', (e) => onConnect());
  S.addEventListener('disconnect', (e) => onDisconnect);

  const onConnect = () => {
    setIsConnected(true);
    console.log('| connected');
  };

  const onDisconnect = () => {
    setIsConnected(false);
    console.log('| disconnected');
  };

  const requestAndSetPort = async () => {
    console.log("| requestAndSetPort!")
    try {
      port.current = await S.requestPort();
      deviceInfo.current = await port.current.getInfo();
    } catch (error){
      console.error("| error in requestAndSetPort", error)
    }
  };

  const hasPort = () => {
    return port.current !== undefined && port.current.readable;
  };

  const openPort = async () => {
    console.log("| openPort!")
    await port.current.open({ baudRate: 9600 })
      .catch((e: any) => console.error("| error on open port: ", e));
  };

  const setUpWriter = () => {
    TE.readable.pipeTo(port.current.writable);
    writer.current = TE.writable.getWriter();
    console.log("| writer set up", writer.current)
  };

  const setUpReader = () => {
    port.current.readable.pipeTo(TD.writable);
    reader.current = TD.readable.getReader();
    console.log("| reader set up", reader.current)
  };

  const openStream = async () => {
    console.log("| openStream!")
    try {
      await requestAndSetPort();
      await openPort();
      if(!hasPort()) return;

      setUpWriter();
      setUpReader();
      setIsStreaming(true);

      console.log("| port.current.readable ?", port.current.readable)
      while (port.current.readable) {
        //console.log("pp port.current.readable", port.current.readable)
        const { value, done } = await reader.current.read();
        isFinite(value) && setVal(value);
        if (done) break;

      }
    }
    catch (error) {
      setIsStreaming(false);
      console.error("error in handleSteram", error)
    }
    finally {
      setIsStreaming(false);
      await port.current.close();
      await reader.current.releaseLock();
      await writer.current.releaseLock();
    }
  };

  return { isStreaming, val, openStream, isConnected };
}