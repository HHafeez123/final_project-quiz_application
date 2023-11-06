import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1 style={{ fontSize: '2em',  marginTop: '10px'}} >CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week2" style={{fontSize: '1em'}}>Week 2</Link>
      </div>
      <div></div>
      
    </main>
  )
}