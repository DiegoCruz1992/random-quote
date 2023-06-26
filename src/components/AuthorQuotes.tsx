import { useState, useEffect } from "react"
import { Quote } from "./Quote"
import { fetchQuotes } from "@/utils/api"
import { LoaderSpinner } from "./LoaderSpinner"

export function AuthorQuotes({ author }: AuthorsQuotesProps) {
  const [authorQuotes, setAuthorQuotes] = useState<QuoteData[]>([])

  useEffect(() => {
    getQuotesByAuthor()
  }, [])

  async function getQuotesByAuthor() {
    try {
      const data = await fetchQuotes(`?author=${author}`)

      setAuthorQuotes(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      {!authorQuotes.length ? <LoaderSpinner /> : (
        <>
          <h1 className="ml-20 text-4xl font-bold">{author}</h1>

          <div className="my-40 flex flex-col gap-32">
            {authorQuotes.map((quote) => (
              <Quote key={quote._id} quoteText={quote.quoteText} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}