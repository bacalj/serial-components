'use client'

import { useSerial } from '../useSerial';

export default function SerialHost() {
  const { isStreaming, val, openStream, isConnected } = useSerial();

  return (
    <div>
      <button
        className="m-3 bg-indigo-300 px-6 py-2 rounded-md"
        onClick={openStream}
      >
        { isStreaming && isConnected
          ? "✅ Connected"
          : "🔌 Click To Connect"
        }
      </button>
      <div className="m-3 text-xl">
        { val }
      </div>
    </div>
  );
}
