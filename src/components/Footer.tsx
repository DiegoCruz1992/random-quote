import Link from "next/link";

export function Footer() {
  return (
    <footer className="p-4 text-center text-sm text-gray-300">
      created by <span className="text-gray-500 underline">Diego Mauricio</span> - <Link target="_blank" className="hover:underline" href='https://www.devchallenge.com.br/'>devChallenges.io</Link>
    </footer>
  )
}