import { ArrowRight } from "lucide-react";
import { Quote } from "@/components/Quote";

export function RandomQuotes({ quoteAuthor, quoteGenre, quoteText, setIsAuthorSelected }: RandomQuotesProps) {
  return (
    <div className="flex max-h-[720px] flex-col items-center justify-center">
      <Quote quoteText={quoteText} />
      <div
        onClick={() => setIsAuthorSelected(true)}
        className="group hover:bg-gray-600 duration-500 ease-out mt-20 w-full max-w-lg cursor-pointer self-end px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold group-hover:text-gray-100">{quoteAuthor}</p>
            <p className="text-sm text-gray-300">{quoteGenre}</p>
          </div>

          <ArrowRight className="invisible group-hover:visible text-gray-100" />
        </div>
      </div>
    </div>
  )
}