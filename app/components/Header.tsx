import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex">
      <Link href="/" className="font-semibold p-5 text-2xl ">
        Medium
      </Link>
    </div>
  );
}
