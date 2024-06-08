import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-10 p-10 text-end flex flex-col gap-5">
      <div className="text-gray-500">
        Credits: JSON data was taken from{' '}
        <Link
          href="https://dummyjson.com/docs/posts"
          target="_blank"
          className="underline"
        >
          DummyJSON
        </Link>
      </div>
      <div className="">Made with ✨❤️ at nFactorial in 2024.</div>
    </div>
  );
}
