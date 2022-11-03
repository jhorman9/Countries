import quotesList from "../src/quote.json";
import QuoteItem from "./QuoteItem";

function Quotes() {

  return (
    <div className="App">
      <h1>Quotes</h1>
      <ul>
        {quotesList.map((quote) => (
          <QuoteItem quote={quote} key={quote.quote} />
        ))}
      </ul>
    </div>
  );
}

export default Quotes;