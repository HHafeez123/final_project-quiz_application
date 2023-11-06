
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <h1 style={{ fontSize: '2em', marginLeft: '250px' , marginTop: '100px'}} >CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo style={{fontSize: '1em', marginLeft: '250px'}}/>
      <Link href="/week2" style={{fontSize: '1em', marginLeft: '250px'}}>Week 2</Link>
      </div>
      <div></div>
      
    </main>
  )
}