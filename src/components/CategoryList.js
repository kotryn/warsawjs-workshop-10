import React from 'react';

import CategoryCard from './CategoryCard'

export default function CategoryList({categoryList, deleteItem, changeItem}){
    const items = categoryList.map((element, index) =>
        <div key={element+index}>
            <CategoryCard element={element} changeItem={changeItem} index={index}/>
            <button onMouseDown={() => deleteItem(index)}>delete</button>
        </div>
    );

    return <div>{items}</div>
}