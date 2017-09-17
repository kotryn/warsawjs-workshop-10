import React from 'react';

export default function Counter({name, func}){

    return<button onClick={func}>{name}</button>
}