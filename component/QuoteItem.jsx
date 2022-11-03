import React from "react";

const QuoteItem = ({ quote }) => {
  return (
    <li>
      <q>{quote.quote}</q>
      <br />
      <b>- {quote.author}</b>
    </li>
  );
};

export default QuoteItem;