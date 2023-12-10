import Link from 'next/link';

export default function QuizMeNow() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ background: '#00bcd4', color: '#fff' }}>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ backgroundColor: '#004d40', padding: '20px', borderRadius: '5px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '3em', margin: '0', color: '#00bcd4' }}>Quiz Me Now</h1>
        </div>
        <Link href="/Quiz" style={{ fontSize: '1.5em', color: '#fff', padding: '20px' }}>Start a Quiz</Link>
      </div>
      <div>
        <h2 style={{ fontSize: '2em', marginBottom: '20px' }}>Featured Quizzes</h2>
        <Link href="/Math" style={{ fontSize: '1.2em', color: '#fff', textDecoration: 'underline' }}>Math Quiz</Link>
        <Link href="/Science" style={{ fontSize: '1.2em', color: '#fff', textDecoration: 'underline', marginLeft: '20px' }}>Science Quiz</Link>
      </div>
    </main>
  );
};
