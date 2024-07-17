import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <h1>My Typescript app</h1>
        <nav>
          <Link href="/" className="text-emerald-800 hover:text-emerald-100">
            Home
          </Link>
          <Link
            href="/posts"
            className="text-emerald-800 hover:text-emerald-100"
          >
            Posts
          </Link>
        </nav>
      </header>
    </>
  );
}
