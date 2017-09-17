import React from 'react';

import TransactionCard from './TransactionCard'

export default function TransactionList({transactionList, deleteItem}){
    const items = transactionList.map((element, index) =>
        <div key={index}>
            <TransactionCard element={element} />
            <button onClick={() => deleteItem(index)}>delete</button>
        </div>
    );

    return <div>{items}</div>
}