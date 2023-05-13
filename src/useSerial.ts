import { useState } from 'react'

export function useSerial() {
  const [connected, setConnected] = useState(false)
  const [value, setValue] = useState(0)

  return [value, connected]
}