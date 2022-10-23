import React from 'react';

const Author = (authorsItem) => {
    return (
        <div className='Author'>
            <div className="authorItems">
                - {authorsItem.authorsItem}
            </div>
        </div>
    );
};

export default Author;