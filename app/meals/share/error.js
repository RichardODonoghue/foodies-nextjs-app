'use client'; // Error components must be a client component

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal. Please try again later.</p>
    </main>
  );
}
