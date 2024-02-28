import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="text-5xl">Home</h1>

      <Link href="/products?showDialog=y" className="text-3xl underline">
        Go to Products with Modal
      </Link>

      <Link href="/products" className="text-3xl underline">
        Go to Products without Modal
      </Link>
    </>
  );
}

// Since Dialog we are importing is a client component, we can't just pass functions created on the server into client component,as this Product component is a server component.
// Event handlers cannot be passed to Client Component props.
