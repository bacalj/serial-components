import SerialHost from '../components/serial-host'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono text-4xl">
      <SerialHost/>
    </main>
  )
}
