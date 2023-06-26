import { RefreshCcw } from "lucide-react";

export function Header({ handleFetchRandomQuote }: HeaderProps) {
  return (
    <header className="self-end">
      <button
        onClick={() => handleFetchRandomQuote()}
        className="flex cursor-pointer items-center gap-2 text-gray-500">
        <span>random</span>
        <RefreshCcw size={20} />
      </button>
    </header>
  )
}