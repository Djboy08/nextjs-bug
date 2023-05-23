import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Link href={"/normal/test"}>
        Noramal Route without static
      </Link>
      <Link href={"/bugged/test"}>
        Bugged Route with static
      </Link>
    </main>
  )
}
