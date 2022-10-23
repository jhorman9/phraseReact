import quotes from '../quote.json';
import Quote from './Quote';
import Author from './Author';
import { useState } from 'react';


function QuoteBox() {

  const [amount, setAmount] = useState(Math.floor(Math.random() * quotes.length));
  const colors = ["#081c15","#ffb703", "#22223b", "#023e8a", "#003049", "#03071e", "#370617", "#6a040f", "#9d0208", "#dc2f02", "#e85d04", "#f48c06", "#9a031e", "#ffc300"]
  const nextQuote = () =>{
    setAmount(Math.floor(Math.random() * quotes.length));
  }
  let getQuotes = quotes[amount].quote;
  let getAutor = quotes[amount].author;
  let colorsLength = Math.floor(Math.random() * colors.length);
  let getColorRandom = colors[colorsLength];
  document.body.style = `background: ${getColorRandom}; color:${getColorRandom}`;
  return (
    <div className="QuoteBox">
        <div className="QuoteContent">
            <div className="phrases">
                <Quote quotesItem = {getQuotes}/>
                <Author authorsItem = {getAutor}/>
            </div>
            <button onClick={nextQuote} style={{background: getColorRandom}}><i class="fa-solid fa-chevron-right"></i></button>
        </div>
    </div>
  )
}

export default QuoteBox;