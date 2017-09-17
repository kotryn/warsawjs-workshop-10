import React from 'react';

import TransactionCard from './TransactionCard'

export default function TransactionList({transactionList, deleteItem, changeItem}){
    const items = transactionList.map((element, index) =>
        <div key={element+index}>
            <TransactionCard element={element} changeItem={changeItem} index={index}/>
            <button onMouseDown={() => deleteItem(index)}>delete</button>
        </div>
    );

    return <div>{items}</div>
}