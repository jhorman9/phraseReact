import React from 'react';

const Quote = (quotesItem) => {
    return (
        <div className='quoteItems'>
            <i class="fa-solid fa-quote-left" id='quote'></i> {quotesItem.quotesItem}
        </div>
    );
};

export default Quote;