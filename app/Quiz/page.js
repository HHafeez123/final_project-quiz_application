import Link from 'next/link';

const Quiz = () => {
  // You can define the quiz categories or topics here

  const quizCategories = [
    { id: 'Math', name: 'Mathematics' },
    { id: 'Science', name: 'Science' },
    { id: 'SocialStudies', name: 'Social Studies' },
    { id: 'Trivia', name: 'Trivia' },
    // Add more quiz categories as needed
  ];

  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24" style={{ background: '#00bcd4', color: '#fff' }}>
      <div style={{ marginBottom: '20px' }}>
        <h1 style={{ fontSize: '3em', margin: '0', color: '#469BA6' }}>Choose a Quiz Category</h1>
      </div>
      <div>
        {/* Map through quiz categories and generate links */}
        {quizCategories.map((category) => (
          <div key={category.id} style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '1.5em', color: '#fff' }}>{category.name}</h2>
            <p style={{ fontSize: '1em', color: '#fff',  marginTop: '5px' }}>
              <Link href={`/${category.id}`} style={{ color: '#fff', textDecoration: 'underline' }}>
                {`${category.name} Basics`}
              </Link>
            </p>
          </div>
        ))}
      </div>
      <div>
        <Link href="/" style={{ fontSize: '1.2em', color: '#fff', textDecoration: 'underline' }}>Go back to Home</Link>
      </div>
    </main>
  );
};

export default Quiz;
