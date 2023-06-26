'use client'

import { useEffect, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { fetchQuotes } from "@/utils/api";
import { RandomQuotes } from "@/components/RandomQuotes";
import { LoaderSpinner } from "@/components/LoaderSpinner";
import { AuthorQuotes } from "@/components/AuthorQuotes";


export default function Home() {
  const [randomQuote, setRandomQuote] = useState<QuoteData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthorSelected, setIsAuthorSelected] = useState(false)

  useEffect(() => {
    getRandomQuote()
  }, [])

  async function getRandomQuote() {
    try {
      setIsLoading(true)
      setIsAuthorSelected(false)
      const data = await fetchQuotes('random')

      setRandomQuote(data[0])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  console.log(randomQuote)

  return (
    <div className="max-w-[1440px] min-h-screen m-auto flex flex-col p-8">
      <Header handleFetchRandomQuote={getRandomQuote} />

      <main className="m-auto mt-20 flex max-w-[620px] flex-1">

        {/* {randomQuote && <AuthorQuotes author={randomQuote?.quoteAuthor} />} */}

        {!randomQuote || isLoading ? (
          <LoaderSpinner />
        ) : (
          !isAuthorSelected && (
            <RandomQuotes
              setIsAuthorSelected={setIsAuthorSelected}
              {...randomQuote}
            />
          )
        )}

        {randomQuote && isAuthorSelected && <AuthorQuotes author={randomQuote?.quoteAuthor} />}

      </main>

      <Footer />
    </div>
  )
}
