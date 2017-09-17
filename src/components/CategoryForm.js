import React from 'react';

export default function CategoryForm({addItem}){
    return  <div><input type="text" id="input" /><button onClick={() => addItem(document.getElementById('input').value)}>Add</button></div>
}