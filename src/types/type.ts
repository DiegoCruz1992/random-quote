interface QuoteData {
  _id: string
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
}

interface RandomQuotesProps {
  quoteText: string
  quoteAuthor: string
  quoteGenre: string
  setIsAuthorSelected: (isAuthorSelected: boolean) => void
}

interface QuotesProps {
  quoteText: string
}

interface AuthorsQuotesProps {
  author: string
}

interface HeaderProps {
  handleFetchRandomQuote: () => void
}