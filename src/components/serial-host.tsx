'use client'

import { useSerial } from '../useSerial';

const buttonClasses = "cursor-pointer mr-3 p-3 hover:bg-indigo-600 hover:text-white rounded-md"

export default function SerialHost() {
  const { isStreaming, val, openStream } = useSerial();

  return (
    <div className="flex">
      <button className={buttonClasses} onClick={openStream}>
        {isStreaming ? "✅ Connected" : "🔌 Connect"}
      </button>
      <div className='p-3'>
        { val }
      </div>
    </div>
  );
}
